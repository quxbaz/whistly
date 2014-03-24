/*
  local variables:
  buffer-name: "editor/controller"
  end:
*/


define(['app/app'], function(App) {

  App.EditorController = Em.Controller.extend({

    needs: ['gui'],

    actions: {
      textChanged: function(text) {
        // Update the gui controller.
        this.get('controllers.gui').send('textChanged', reader.parse(text));
      }
    }

  });

});
