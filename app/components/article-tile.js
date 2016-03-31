import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      this.sendAction('deletePost', post);
    },
    updatePost(post) {
      this.sendAction('updatePost', post);
    }
  }
});
