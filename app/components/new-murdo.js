import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create() {
      var params = {
        title: this.get('title'),
        victim: this.get('victim'),
        location: this.get('location'),
        story: this.get('story'),
        murderer: null,
        started: false,
      };
      this.sendAction('createMurdo', params);
    }
  }
});
