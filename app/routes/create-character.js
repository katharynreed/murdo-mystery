import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createCharacter(params) {
      var newCharacter = this.store.createRecord('character', params);
      newCharacter.save();
      this.transitionTo('character', newCharacter.id);
    }
  }
});
