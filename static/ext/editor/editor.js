/*
  editor.js
*/


var editor = {

  controllerMixin: {
    // needs: ['gui'],
    actions: {
      textChanged: function(text) {
        // Update the gui controller.
        // this.get('controllers.gui').send('textChanged', reader.parse(text));
        // this.send
      }
    }
  },

  viewMixin: {

    tagName: 'div',
    classNames: ['text-editor'],
    attributeBindings: ['editModeAttr:contenteditable'],
    editMode: true,

    editModeAttr: function() {
      return this.get('editMode') ? 'true' : null;
    }.property('editMode'),

    text: [

      '* Heading A',
      'a1',
      'a2',
      'a3',
      '',

      '* Heading B',
      'b1',
      'b2',
      'b3',
      'b4',
      '',

      '* Heading C',
      'c1',
      'c2',

    ].join('<br/>'),

    didInsertElement: function() {
      this.$().html(this.get('text'));
    },

    input: function(event) {
      var newText = reader.$fmt(this.$());
      this.set('text', newText);
      this.get('controller').send('textChanged', newText);
    }

  },

};

// Browser or CommonJS
if (typeof module !== 'undefined' && module.exports)
  module.exports = editor;
else
  this.editor = editor;
