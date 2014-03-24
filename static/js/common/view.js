/*
  local variables:
  buffer-name: "common/view"
  end:
*/


App.ContentEditableView = Em.View.extend({

  templateName: 'editable',
  editMode: true,

  editModeAttr: function() {
    return this.get('editMode') ? 'true' : null;
  }.property('editMode'),

  text: 'Edit this content.',

  input: function(event) {
    var newText = reader.$fmt(this.$('.editor'));
    this.set('text', newText);
    this.get('controller').send('textChanged', newText);
  }

});
