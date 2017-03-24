import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  victim: DS.attr('string'),
  murderer: DS.attr('string'),
  location: DS.attr('string'),
  story: DS.attr('string'),
  started: DS.attr('boolean'),
  characters: DS.hasMany('character', { async: true }),
});
