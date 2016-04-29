import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: '/posts'}, function(){
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:post_id' });
    this.route('edit', { path: '/:post_id/edit' });
  });
});

export default Router;
