import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        username: this.get('username') ? this.get('username'): '',
        body: this.get('body') ? this.get('body'): '',
        post: this.get('post') ? this.get('post'): ''
      };
      this.sendAction('addComment', params);
      this.set('username', '');
      this.set('body', '');
    }
  }
});
