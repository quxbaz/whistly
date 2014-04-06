/*
  local variables:
  buffer-name: "app"
  end:
*/


define('App', function() {

  var App = Em.Application.create({
    LOG_TRANSITIONS: true
  });

  window.App = App;

  App.Store = DS.Store.extend({
    revision : 13,
    adapter  : DS.FixtureAdapter
  });

  return App;

});
