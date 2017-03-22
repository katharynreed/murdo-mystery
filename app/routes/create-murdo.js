import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createMurdo(params) {
      var newMurdo = this.store.createRecord('murdo', params);
      newMurdo.save();
      this.transitionTo('murdo', newMurdo.id);
    }
  }
});
