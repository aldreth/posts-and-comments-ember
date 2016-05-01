import DS from 'ember-data';
import ENV from 'posts-and-comments-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.HOST_URL
});
