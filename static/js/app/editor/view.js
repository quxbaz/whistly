/*
  editor/view
*/


define(['app/app'], function(App) {

  App.EditorView = Em.View.extend({

    templateName: 'editor',

    input: function(event) {
      this.get('controller').send('input', event);
    }

  });

  App.ListsView = Em.View.extend({
    templateName: 'lists'
  });

});
