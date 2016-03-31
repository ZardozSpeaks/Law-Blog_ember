import Ember from 'ember';

export default Ember.Component.extend({
  hasComments: false,
  actions: {
    addComment(params) {
      this.set('hasComments', true);
      this.sendAction('addComment', params);
    }
  }
});
