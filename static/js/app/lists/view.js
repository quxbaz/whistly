/*
  local variables:
  buffer-name: "lists/view"
  end:
*/


define('lists/view', function(App) {

  App.GuiView = Em.View.extend({
    templateName: 'gui',
    classNames: ['gui']
  });

  App.ListView = Em.View.extend({
    tagName: 'div',
    classNames: ['list'],
    templateName: 'list'
  });

  App.ListItemView = Em.View.extend({
    tagName: 'li',
    templateName: 'list-item'
  });

});
