/*
  local variables:
  buffer-name: "gui/view"
  end:
*/


define(['app/app'], function(App) {

  App.GuiView = Em.View.extend({
    templateName: 'gui'
  });

  App.ListsView = Em.View.extend({
    templateName: 'lists'
  });

});
