/*
  local variables:
  buffer-name: "app"
  end:
*/


define('App', function() {

  var App = window.App = Em.Application.create({
    LOG_TRANSITIONS: true
  });

  // App.ApplicationAdapter = DS.FixtureAdapter;

  App.ApplicationSerializer = DS.LSSerializer.extend();
  App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'whistly'
  });

  App.Store = DS.Store.extend({
    revision : 13,
    // adapter  : DS.FixtureAdapter
  });

  App.Router.map(function() {
    // Resources
  });

  App.ApplicationView = Em.View.extend({
    elementId: 'app',
    templateName: 'application',
  });

  return App;

});
