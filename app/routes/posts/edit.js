import Ember from 'ember';

export default Ember.Route.extend({
  deactivate() {
    let model = this.controller.get('model');
    model.rollbackAttributes();
  },
});
