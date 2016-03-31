import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.sendAction('updatePost', post, params);
    }
  }
});
