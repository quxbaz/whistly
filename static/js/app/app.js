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

  // TODO: Move into another file.
  App.EditorController = Em.Controller.extend(editor.controller);
  App.EditorView = Em.View.extend(editor.view);

  return App;

});
