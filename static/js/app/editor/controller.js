/*
  local variables:
  buffer-name: "editor/controller"
  end:
*/


App.EditorController = Em.Controller.extend({

  needs: ['gui'],

  actions: {
    textChanged: function(text) {
      // Update the gui controller.
      this.get('controllers.gui').send('textChanged', reader.parse(text));
    }
  }

});
