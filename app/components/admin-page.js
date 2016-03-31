import Ember from 'ember';

export default Ember.Component.extend({
  admin:true,
  actions: {
    saveNewPost: function(params) {
      this.sendAction('saveNewPost', params);
    },
    deletePost(post) {
      this.sendAction('deletePost', post);
    }
  }
});
