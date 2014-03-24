/*
  local variables:
  buffer-name: "editor/controller"
  end:
*/


define(['app/app'], function(App) {

  App.EditorController = Em.Controller.extend({

    needs: ['gui'],

    // rawText: 'Edit this content.',

    actions: {
      textChanged: function(event) {
        log('changed');
        // log(this.get('rawText'));
        this.get('controllers.gui').send('edit');
      }
    }

  });

});
