import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('create-character');
  this.route('character', {path: '/character/:character_id'});
  this.route('create-murdo');
  this.route('murdo', {path: '/murdo/:murdo_id'});
});

export default Router;
