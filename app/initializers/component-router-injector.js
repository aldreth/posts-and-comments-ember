// Inject all Ember components with a router object
// http://stackoverflow.com/a/30787510/1010582
export function initialize(application) {
  application.inject('component', 'router', 'router:main');
}

export default {
  name: 'component-router-injector',
  initialize: initialize
};
