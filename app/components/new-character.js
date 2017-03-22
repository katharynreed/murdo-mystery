import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create() {
      var params = {
        name: this.get('name'),
        profession: this.get('profession'),
        bio: this.get('bio'),
        idol: this.get('idol'),
        weapon: this.get('weapon'),
        image: this.get('image'),
        murdo: this.get('murdo'),
      }
      console.log(params);
      this.sendAction('createCharacter', params);
    }
  }
});
