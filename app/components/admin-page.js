import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPost: function(params) {
      this.sendAction('saveNewPost', params);
    }
  }
});
