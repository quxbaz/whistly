/*
  local variables:
  buffer-name: "lists/route"
  end:
*/


define('lists/route', function(App) {

  App.Router.map(function() {
    this.resource('lists');
  });

  App.ListsRoute = Em.Route.extend({

  });

});
