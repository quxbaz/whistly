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

  App.DashboardController = Em.ArrayController.extend({});

  App.DashboardView = Em.View.extend({
    templateName: 'dashboard',
    classNames: ['dashboard']
  });

  // Add workspace

  App.AddWorkspaceController = Em.Controller.extend({
    actions: {
      confirmModalInput: function(title) {
        this.store.createRecord('workspace', {
          title: title
        }).save();
      }
    }
  });

  App.AddWorkspaceView = App.ModalInputView.extend({
    classNames: ['add-workspace'],
    normalText: 'Add a workspace...',
    placeholderText: 'Title'
  });

});
