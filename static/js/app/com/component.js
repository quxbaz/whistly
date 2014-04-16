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
      var text = el.innerText || el.textContent;
      this.set('value', text);
    },
    didInsertElement: function() {
      this._super.apply(this, arguments);
      this.$().text(this.get('value'));
      if (this.get('focus'))
        this.$().focus();
    }
  });

  App.ModalInputComponent = Em.Component.extend({
    layoutName: 'modal-input-layout',
    tagName: 'form',
    classNames: ['modal-input'],
    editMode: false,
    inputValue: '',
    inputPlaceholder: '',
    cancelText: 'Cancel',
    saveText: 'Save',
    normalText: 'Toggle',
    actions: {
      toggleEditMode: function() {
        console.log('toggle');
        this.set('editMode', true);
      },
      cancel: function() {
        this.set('editMode', false);
      },
      confirm: function() {
        console.log('** Confirm');
        this.set('editMode', false);
        this.sendAction('modalInputConfirm');
      }
    }
  })

});
