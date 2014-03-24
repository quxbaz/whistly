/*
  local variables:
  buffer-name: "editor/view"
  end:
*/


define(['app/app'], function(App) {

  App.EditorView = Em.View.extend({

    templateName: 'editor',
    rawText: 'Edit this content.',

    // // TODO: How to bind?
    // input: function(event) {
    //   log(this.get('rawText'));
    //   this.get('controller').send('input', event);
    // }

  });

  App.ListsView = Em.View.extend({
    templateName: 'lists'
  });

});
