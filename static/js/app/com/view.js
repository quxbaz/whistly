/*
  local variables:
  buffer-name: "com/view"
  end:
*/


define('com/view', function(App, outerWatcher) {

  App.ModalInputView = Em.View.extend(outerWatcher.mixin, {
    templateName: 'modal-input',
    classNames: ['modal-input'],
    classNameBindings: ['editMode'],
    editMode: false,
    inputValue: '',
    placeholderText: '',
    cancelText: 'Cancel',
    saveText: 'Save',
    normalText: 'Toggle',
    actions: {
      toggleEditMode: function() {
        this.set('editMode', true);
      },
      cancel: function() {
        this.set('editMode', false);
      },
      confirm: function() {
        if (_.trim(this.get('inputValue' ).length) == 0)
          return;
        this.set('editMode', false);
        this.get('controller').send('confirmModalInput', this.get('inputValue'));
      }
    },
    watchEvents: {
      outsideClick: function() {
        this.set('editMode', false);
      },
      escapeKey: function() {
        this.set('editMode', false);
      }
    }
  });

  Em.Handlebars.helper('modal-input', App.ModalInputView);

})
