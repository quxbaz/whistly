/*
  local variables:
  buffer-name: "gui/view"
  end:
*/


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
