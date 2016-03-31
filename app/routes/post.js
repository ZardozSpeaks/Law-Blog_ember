import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    },
    deleteComment(comment) {
      var post = comment.post;
      if(confirm("Are you sure you want to delete this comment?")) {
        comment.destroyRecord();
      }
      this.refresh();
    }
  }
});
