define([], function() {

  var Editor = Backbone.View.extend({

    tagName    : 'div',
    className  : 'text-editor',
    attributes : {
      'contentEditable': true
    },

    events: {
      'input'   : 'onInput',
      'keydown' : 'onKeydown',
      'click'   : 'onClick',
    },

    initialize: function(options) {
      this.undoLimit = 999;
      this.states = [];
    },

    onInput: function(ev) {
      if (this.states.length >= this.undoLimit)
        this.states.shift();
      this.states.push(this.$el.html());
      this.trigger('change');
      log(this.states.length);
    },

    onKeydown: function(ev) {
      // var key = String.fromCharCode(ev.keyCode).toLowerCase();
      // if (key === 'z')
      //   this.undo();
    },

    onClick: function(ev) {
      this.undo();
    },

    undo: function() {
      this.states.pop();
      this.$el.html(_.last(this.states));
      this.trigger('change');
    },

    redo: function() {
    },

    render: function() {
      // this.$el.text('foobar');
      return this.$el;
    },

  });

  return Editor;

});
