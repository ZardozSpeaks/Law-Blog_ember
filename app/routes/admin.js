import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('post'),
    });
  },
  actions: {
    saveNewPost: function(params) {
      var date = new Date();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      params.time = month+"/"+day+"/"+year;
      this.store.createRecord('post', params).save();
      this.transitionTo('admin');
    },
  }
});
