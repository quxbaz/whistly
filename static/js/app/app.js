/*
  app
*/


define(function() {

  var App = Em.Application.create({
    LOG_TRANSITIONS: true
  });

  App.Store = DS.Store.extend({
    revision : 13,
    adapter  : DS.FixtureAdapter
  });

  window.App = App;

  return App;

});
