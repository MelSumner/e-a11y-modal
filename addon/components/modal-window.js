import Component from '@ember/component';
import layout from '../templates/components/modal-window';
import { schedule } from '@ember/runloop';
import { computed } from '@ember/object';

const LANDMARKS = [
    'aside',
    'footer',
    'form',
    'header',
    'main',
    'nav'
];

export default Component.extend({
  layout,
  isModalVisible: false,

  bodyElement: computed(function() {
    return document.body;
  }),

  actions: {
    triggerModal() {      
      this.set('isModalVisible', true);
      // add the modal-open class to the body element
      document.body.classList.add("modal-open");

      // wait until the modal has rendered and then move focus to it
      schedule('afterRender', this, function() {
        // TODO issue #3
        let modalWindow = this.element.querySelector(".a11y-modal");  
        modalWindow.focus();

        modalWindow.addEventListener('keydown', (event) => {
          if (event.keyCode === 27 && document.body.classList.contains("modal-open")) {
            this.closeModal();
          } else {
            return;
          }
        });

        // trap the focus in the modal
        
        /* 
        To understand the approach used here, please familiarize yourself with the wicg-inert polyfill: https://github.com/WICG/inert or else you may be ill-equipped to discuss the subject.
        
        There are two items that we are considering with this approach: performance and technical accuracy from an accessibility standpoint.
        
        If we make it an app constraint to have the content inside of landmark regions, but then render the modal itself outside of these regions (in between the main element and the footer element), then we can set .inert on only those elements- which should give us better performance than searching for every other element except the modal. Depending on our tests, we _might_ have some a11y test failures since technically all content should be inside landmark elements. However, considering that the modal isn't rendered to the dom until we need it, AND considering the potential performance tradeoffs (finding and setting inert on only three elements vs an unknown number of elements), it seems like a reasonable approach.
        */
        
        let landmarkElements = document.querySelectorAll(LANDMARKS);

        landmarkElements.forEach(function(landmarkElement) {
          if (landmarkElement.parentElement === document.body) {
            landmarkElement.inert = true;
          }  
        });
      });
    },

    closeModal() {
      this.closeModal();
    }
  },

  // this a function so I could call the same function with the `keyDown` event 
  closeModal() {
      // remove the modal
      this.set('isModalVisible', false);
      
      // add the modal-open class to the body element
      document.body.classList.remove("modal-open");
      
      //turn inert off
      let landmarkElements = document.querySelectorAll(LANDMARKS);

      landmarkElements.forEach(function(landmarkElement) {
        if (landmarkElement.parentElement === document.body) {
          landmarkElement.inert = false;
        }  
      });

      schedule('afterRender', this, function() {
        let buttonTrigger = this.element.querySelector(".a11y-modal__button-trigger");
        // return the focus to the trigger button
        buttonTrigger.focus();
      });
  },
});
