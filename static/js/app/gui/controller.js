/*
  gui/controller
*/


define(['app/app'], function(App) {

  App.GuiController = Em.Controller.extend({

    actions: {
      edit: function() {
        log('gui/edit');
      }
    }

  });

});
