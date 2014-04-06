/*
  local variables:
  buffer-name: "lists"
  end:
*/


define('lists', function() {

  // var fixture = this.needs('lists/fixture');

  App.Router.map(function() {
    this.resource('lists');
  });

  App.ListsRoute = Em.Route.extend({
    model: function() {}
  });

  // App.ListView = Em.View.extend({
  //   tagName: 'div',
  //   classNames: ['list'],
  //   templateName: 'list'
  // });

  // App.ListItemView = Em.View.extend({
  //   tagName: 'li',
  //   templateName: 'list-item'
  // });

});
