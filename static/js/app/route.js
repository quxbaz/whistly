/*
  local variables:
  buffer-name: "route"
  end:
*/


App.Router.map(function() {
  // Resources
});

App.IndexRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('editor', {
      into: 'application',
      outlet: 'editor',
    });
    this.render('gui', {
      into: 'application',
      outlet: 'gui'
    });
  }
});
