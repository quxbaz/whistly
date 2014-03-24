/*
  local variables:
  buffer-name: "common/view"
  end:
*/


define(['app/app'], function(App) {

  App.ContentEditableView = Em.View.extend({

    templateName: 'editable',
    editMode: true,

    editModeAttr: function() {
      return this.get('editMode') ? 'true' : null;
    }.property('editMode'),

    rawText: 'Edit this content.',

    input: function() {
      this.get('controller').send('textChanged');
    }

  });

})
