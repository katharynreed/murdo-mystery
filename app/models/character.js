import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  profession: DS.attr('string'),
  bio: DS.attr('string'),
  idol: DS.attr('string'),
  weapon: DS.attr('string'),
  image: DS.attr('string'),
  murdo: DS.belongsTo('murdo', { async: true }),
});
