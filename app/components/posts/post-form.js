import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this
        .model
        .save()
        .then( () => {
          this.get('router').transitionTo('posts.show', this.model);
        })
        .catch(() => console.log('help'));
    }
  }
});
