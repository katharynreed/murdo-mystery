import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('murdo', params.murdo_id);
  },
  actions: {
    createCharacter(murdo) {
      this.transitionTo('create-character', murdo);
    }
  }
});
