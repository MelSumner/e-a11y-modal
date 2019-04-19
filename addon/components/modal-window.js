import Component from '@ember/component';
import layout from '../templates/components/modal-window';
import { schedule } from '@ember/runloop';

export default Component.extend({
  layout,
  isModalVisible: false,

  // add support for the ESC key
  
  actions: {
    triggerModal() {      
      this.set('isModalVisible', true);
      // add the modal-open class to the body element
      document.body.classList.add("modal-open");

      schedule('afterRender', this, function() {
        let modalWindow = this.element.querySelector(".a11y-modal");        
        // focus on the modal
        modalWindow.focus();  
      })
    },
    closeModal() {
      this.set('isModalVisible', false);
      // return the focus to the trigger button
      this.element.querySelector(".a11y-modal__button-trigger").focus();
      // add the modal-open class to the body element
      document.body.classList.remove("modal-open");
      
    }
  }
});
