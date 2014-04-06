/*
  local variables:
  buffer-name: "com/component"
  end:
*/


define('com/component', function(App) {

  App.FocusInputComponent = Em.TextField.extend({
    becomeFocused: function() {
      this.$().focus();
    }.on('didInsertElement')
  });

});
