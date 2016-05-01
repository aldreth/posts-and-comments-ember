import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deletePost(post) {
      if (confirm('Are you sure?')) {
        post.destroyRecord().then(() => {
          this.transitionTo('posts.index');
        }).catch(() => {
          post.reload();
        });
      }
    }
  }
});
