import Component from '@ember/component';
import layout from '../templates/components/modal-window';

export default Component.extend({
  layout,
  isModalVisible: false,

  // add support for the ESC key

  actions: {
    clickButton () {
      // set the isModalVisible property to true
      this.set('isModalVisible', true);
    },
    triggerModal() {      
      let promise = clickButton;
      promise.then(() => {
        // set tabindex to 0 on the modal
        let modalWindow = document.querySelector(".a11y-modal");
        modalWindow.setAttribute("tabindex", "0");
        // set focus on the modal 
        modalWindow.focus();
      });     
      
      // add the modal-open class to the body element
      let bodyElement = document.querySelector("body");
      bodyElement.classList.add("modal-open");    

    },
    closeModal() {
      this.set('isModalVisible', false);
      // set tabindex back to -1
      // return the focus to the trigger button
    }
  }
});
