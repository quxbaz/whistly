/*
  local variables:
  buffer-name: "dashboard"
  end:
*/


define('dashboard', function(App) {

  App.Router.map(function() {
    this.resource('dashboard');
  });

  App.DashboardRoute = Em.Route.extend({
    model: function() {
      return this.store.find('workspace');
    }
  });

  App.DashboardController = Em.Controller.extend({
    actions: {
      addNewWorkspace: function() {

      }
    }
  });

  App.DashboardView = Em.View.extend({
    templateName: 'dashboard'
  });

});
