import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },

  deactivate() {
    let model = this.controller.get('model');
    model.rollbackAttributes();
  },
});
