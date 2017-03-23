import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('murdo', params.murdo_id);
  },

  murdoer: null,

  actions: {
    createCharacter(murdo) {
      this.transitionTo('create-character', murdo);
    },

    murdoInit(murdo) {
      var characters = [];
      murdo.set('started', true);
      murdo.get('characters').forEach(function(character) {
        characters.push(character.id);
      });
      var randomNumber = Math.floor(Math.random() * characters.length);
      murdo.set('murderer', characters[randomNumber]);      murdo.save();
      this.transitionTo('murdo', murdo.id);
    },

    murdoComplete(murdo) {
      this.murdoer = $("#select-murdoer option:selected").val();
      if (murdo.get('murderer') === this.murdoer) {
        alert("You have found the murdoer, I guess? That's a cool thing.");
        this.actions.murdoDelete(murdo, this);
      } else {
        alert("That's not the murdoer you goddamn dingus.");
      }
    },

    murdoDelete(murdo, context) {
      var character_deletions = murdo.get('characters').map(function(character) {
        return character.destroyRecord();
      });
      Ember.RSVP.all(character_deletions).then(function() {
        return murdo.destroyRecord();
      });
      context.transitionTo('index');
    }
  }
});
