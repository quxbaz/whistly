/*
  local variables:
  buffer-name: "com/component"
  end:
*/


define('com/component', function(App, mixin) {

  App.FocusInputComponent = Em.TextField.extend(mixin.el.Focus);
  App.FocusTextareaComponent = Em.TextArea.extend(mixin.el.Focus);

  App.TextEditableComponent = Em.Component.extend({
    layout: Em.Handlebars.compile('{{value}}'),
    classNames: ['text-editable'],
    attributeBindings: ['contentEditable'],
    contentEditable: 'true',
    didInsertElement: function() {
      this._super.apply(this, arguments);
      if (this.get('focus'))
        this.$().focus();
    }
  });

});
