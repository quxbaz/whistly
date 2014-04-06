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


  App.Router.map(function() {
    // Resources
  });

  App.IndexRoute = Em.Route.extend({
    renderTemplate: function() {
      this.render();
      // this.render('gui', {
      //   into: 'application',
      //   outlet: 'gui'
      // });
    }
  });

  App.ApplicationView = Em.View.extend({
    elementId: 'app',
    templateName: 'application',
  });

  return App;

});
