/*
  local variables:
  buffer-name: "lists"
  end:
*/


define('lists', function() {

  var fixture = this.needs('lists/fixture');

  App.Router.map(function() {
    this.resource('lists');
  });

  App.ListsRoute = Em.Route.extend({
    model: function() {
      return this.store.find('list');
    }
  });

  // Models

  App.List = DS.Model.extend({
    title: DS.attr('string'),
    items: DS.hasMany('list_item')
  });

  App.ListItem = DS.Model.extend({
    text: DS.attr('string')
  });

  App.List.FIXTURES = fixture.list;
  App.ListItem.FIXTURES = fixture.list_items;

  // Views

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
