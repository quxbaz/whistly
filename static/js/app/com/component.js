/*
  local variables:
  buffer-name: "com/component"
  end:
*/


define('com/component', function(App) {

  App.FocusInputComponent = Em.TextField.extend({
    classNames: ['focus-input'],
    didInsertElement: function() {
      this._super.apply(this, arguments);
      this.$().focus();
    }
  });

  App.FocusTextareaComponent = Em.TextArea.extend({
    classNames: ['focus-textarea'],
    didInsertElement: function() {
      this._super.apply(this, arguments);
      this.$().focus();
    }
  });

});
