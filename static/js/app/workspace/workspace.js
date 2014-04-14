/*
  local variables:
  buffer-name: "workspace"
  end:
*/


define('workspace', function(App, outerWatcher) {

  this.run('./model');

  var mixin = this.needs('com/mixin');

  App.Router.map(function() {
    this.resource('workspace');
  });

  // Workspace

  App.WorkspaceRoute = Em.Route.extend({
    model: function() {
      return this.store.find('list');
    },
    renderTemplate: function(controller, model) {
      this.render();
      this.render('list', {
        into: 'workspace',
        outlet: 'list'
      });
    }
  });

  App.WorkspaceController = Em.ArrayController.extend({});

  App.WorkspaceView = Em.View.extend({
    classNames: ['workspace'],
    templateName: 'workspace'
  });

  // Add list

  App.AddListController = Em.Controller.extend({
    title: '',
    isAddingNewList: false,
    reset: function() {
      this.set('isAddingNewList', false);
      this.set('title', '');
    },
    actions: {
      addNewList: function() {
        this.set('isAddingNewList', true);
      },
      saveNewList: function(title) {
        if (this.get('title').length === 0)
          return;
        this.get('store').createRecord('list', {
          title: this.get('title')
        }).save();
        this.reset();
      },
      cancel: function() {
        this.set('isAddingNewList', false);
      }
    }
  });

  App.AddListView = Em.View.extend(outerWatcher.mixin, {
    classNames: ['add-list'],
    classNameBindings: ['isAddingNewList'],
    templateName: 'add-list',
    isAddingNewList: function() {
      return this.get('controller.isAddingNewList');
    }.property('controller.isAddingNewList'),
    watchEvents: {
      outsideClick: function() {
        this.get('controller').send('cancel');
      },
      escapeKey: function() {
        this.get('controller').send('cancel');
      }
    }
  });

  // List

  App.ListController = Em.ObjectController.extend({
    noteBufferText: '',
    actions: {
      archiveList: function() {
        var list = this.get('model');
        list.deleteRecord();
        list.save();
      },
      addNewNote: function() {
        var that = this;
        this.get('model.notes').then(function(notes) {
          notes.pushObject(that.store.createRecord('note', {
            text: that.get('noteBufferText'),
            list: that.get('model')
          }));
        });
      },
      saveNote: function() {
        this.get('model').save();
        this.set('noteBufferText', '');
      },
      cancelNote: function(note) {
        // this.get();
        this.get('model.notes').then(function(notes) {
          notes.removeObject(note);
        });
      },
      updateNoteBufferText: function(text) {
        this.set('noteBufferText', text);
      }
    }
  });

  App.ListView = Em.View.extend({
    classNames: ['list'],
    templateName: 'list'
  });

  // Note

  App.NoteController = Em.ObjectController.extend({
    editMode: false,
    init: function() {
      this.set('editMode', this.get('model.isNew'));
    },
    actions: {
      saveNote: function() {
        if (this.get('text').length === 0)
          return;
        this.set('editMode', false);
        this.get('model').save();
        this.get('parentController').send('saveNote');
      },
      cancel: function() {
        if (this.get('editMode'))
          this.get('parentController').send('cancelNote', this.get('model'));
      },
      input: function() {
        this.get('parentController').send('updateNoteBufferText', this.get('text'));
      }
    }
  });

  App.NoteView = Em.View.extend(outerWatcher.mixin, {
    classNames: ['note'],
    classNameBindings: ['editMode'],
    tagName: 'li',
    templateName: 'note',
    editMode: function() {
      return this.get('controller.editMode');
    }.property('controller.editMode'),
    input: function() {
      this.get('controller').send('input');
    },
    watchEvents: {
      escapeKey: function() {
        this.get('controller').send('cancel');
      }
    }
  });

});
