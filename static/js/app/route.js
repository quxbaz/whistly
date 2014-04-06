/*
  local variables:
  buffer-name: "route"
  end:
*/


define('route', function(App) {

  // console.log('** route');

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

});
