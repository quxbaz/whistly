/*
  local variables:
  buffer-name: "com/component"
  end:
*/


define('com/component', function(App, mixin) {

  App.FocusInputComponent = Em.TextField.extend(mixin.el.Focus);
  App.FocusTextareaComponent = Em.TextArea.extend(mixin.el.Focus);

});
