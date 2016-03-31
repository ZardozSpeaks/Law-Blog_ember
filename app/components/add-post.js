import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showForm() {
      this.set('addNewPost', true);
    },
    saveNewPost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('saveNewPost', params);
      this.set('title', ''),
      this.set('author', ''),
      this.set('content', ''),
      this.set('image', '')
    }
  }
});
