import Component from '@ember/component';
import layout from '../templates/components/modal-window';

export default Component.extend({
  layout,
  isModalVisible: false,

  init() {
    this._super(...arguments);

    var index = this.get('index');
    this.set('elementId', `component-id${index}`);
  },
  // willInsertElement() {
  //   super.willInsertElement(...arguments);
  //   this.set('lastFocus', document.activeElement);
  // },

  // willDestroyElement() {
  //   super.willDestroyElement(...arguments);
  //   this.lastFocus.focus();
  // }
  actions: {
    triggerModal() {
      this.set('isModalVisible', true);
    },
    closeModal() {
      this.set('isModalVisible', false);
    }
  }
});
