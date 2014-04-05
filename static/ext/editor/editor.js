/*
  editor.js
*/


var editor = {};

editor.FIXTURE = {

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
    'c2'

  ].join('<br/>')

};

editor.controller = {

  // needs: ['gui'],

  actions: {
    textChanged: function(event) {
      // Update the gui controller.
      // this.get('controllers.gui').send('textChanged', reader.parse(text));
      // this.send
      // console.log(event);
    }
  }

};

editor.view = {

  tagName: 'div',
  classNames: ['editor'],
  attributeBindings: ['editModeAttr:contenteditable'],
  editMode: true,
  startText: '', // editor.FIXTURE.text,

  editModeAttr: function() {
    return this.get('editMode') ? 'true' : null;
  }.property('editMode'),

  didInsertElement: function() {
    this.$().html(this.get('startText'));
  },

  input: function(event) {

    // console.log(event);

    // Testing
    // if

    this.get('controller').send('textChanged', event);
  }

};

// CommonJS
if (typeof module !== 'undefined' && module.exports)
  module.exports = editor;
