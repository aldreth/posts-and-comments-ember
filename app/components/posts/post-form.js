import Ember from 'ember';

export default Ember.Component.extend({
  showErrors: false,

  actions: {
    save() {
      this
        .model
        .save()
        .then( () => {
          this.get('router').transitionTo('posts.show', this.model);
        })
        .catch(() => {
          this.set('showErrors', true);
        }
      );
    },
  }
});
