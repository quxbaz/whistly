/*
  editor/controller
*/


define(['app/app'], function(App) {

  App.EditorController = Em.Controller.extend({

    needs: ['gui'],

    actions: {
      input: function(event) {
        log('editor/input');
        this.get('controllers.gui').send('edit');
      }
    }

  });

});
