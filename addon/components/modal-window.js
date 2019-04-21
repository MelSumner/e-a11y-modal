import Component from '@ember/component';
import layout from '../templates/components/modal-window';
import { schedule } from '@ember/runloop';

export default Component.extend({
  layout,
  isModalVisible: false,

  // TODO When the ESC key is pressed, the closeModal action should be triggered.



  actions: {
    triggerModal() {      
      this.set('isModalVisible', true);
      // add the modal-open class to the body element
      document.body.classList.add("modal-open");

      // wait until the modal has rendered and then move focus to it
      schedule('afterRender', this, function() {
        let modalWindow = this.element.querySelector(".a11y-modal");  
        modalWindow.focus();

        // put aria-hidden on the trigger button
        let buttonTrigger = this.element.querySelector(".a11y-modal__button-trigger");
        buttonTrigger.setAttribute("aria-hidden", "true");
        buttonTrigger.setAttribute("tabindex", "-1");

        // trap the focus in the modal
        
        /* 
        To understand the approach used here, please familiarize yourself with the wicg-inert polyfill: https://github.com/WICG/inert or else you may be ill-equipped to discuss the subject.
        
        There are two items that we are considering with this approach: performance and technical accuracy from an accessibility standpoint.
        
        If we make it an app constraint to have the content inside of landmark regions, but then render the modal itself outside of these regions (in between the main element and the footer element), then we can set .inert on only those elements- which should give us better performance than searching for every other element except the modal. Depending on our tests, we _might_ have some a11y test failures since technically all content should be inside landmark elements. However, considering that the modal isn't rendered to the dom until we need it, AND considering the potential performance tradeoffs (finding and setting inert on only three elements vs an unknown number of elements), it seems like a reasonable approach.
        */
        
        // TODO consider abstraction with a CONST that identifies top-level landmark regions
        let headerElement = document.querySelector("header");
        let mainElement = document.querySelector("main");
        let footerElement = document.querySelector("footer");
        // TODO add the rest of the landmark regions 

        headerElement.inert = true;
        mainElement.inert = true;
        footerElement.inert = true;
        
      });

    },
    closeModal() {

      // remove the modal
      this.set('isModalVisible', false);

      //remove aria-hidden and tabindex from the trigger button
      let buttonTrigger = this.element.querySelector(".a11y-modal__button-trigger");
      buttonTrigger.removeAttribute("aria-hidden");
      buttonTrigger.removeAttribute("tabindex");

      // return the focus to the trigger button
      buttonTrigger.focus();
      
      // add the modal-open class to the body element
      document.body.classList.remove("modal-open");
      
      //turn inert off
      let headerElement = document.querySelector("header");
      let mainElement = document.querySelector("main");
      let footerElement = document.querySelector("footer");

      headerElement.inert = false;
      mainElement.inert = false;
      footerElement.inert = false;
    }
  }
});
