/*
  local variables:
  buffer-name: "gui/controller"
  end:
*/


define(['app/app'], function(App) {

  App.GuiController = Em.Controller.extend({

    actions: {
      textChanged: function(tokens) {
        // log(tokens);
      }
    }

  });

});
