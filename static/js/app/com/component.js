/*
  local variables:
  buffer-name: "com/component"
  end:
*/


define('com/component', function(App, mixin) {

  App.FocusInputComponent = Em.TextField.extend(mixin.el.Focus);
  App.FocusTextareaComponent = Em.TextArea.extend(mixin.el.Focus);

  App.TextEditableComponent = Em.Component.extend({
    classNames: ['text-editable'],
    attributeBindings: ['contentEditable'],
    contentEditable: 'true',
    // ContentEditable elements are not two-way binded so we need to
    // do this manually.
    input: function() {
      this._super.apply(this, arguments);
      var el = this.$()[0];
      this.set('value', el.innerText || el.textContent);
    },
    didInsertElement: function() {
      this._super.apply(this, arguments);
      this.$().text(this.get('value'));
      if (this.get('focus'))
        this.$().focus();
    }
  });

});
