import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('murdo', params.murdo_id);
  },
  actions: {
    createCharacter(params) {
      var newCharacter = this.store.createRecord('character', params);
      var murdo = params.murdo;
      murdo.get('characters').addObject(newCharacter);
      newCharacter.save().then(function() {
        return murdo.save();
      });
      this.transitionTo('character', newCharacter.id);
    }
  }
});
