/*
  local variables:
  buffer-name: "workspace"
  end:
*/


define('workspace', function(App, outerWatcher) {

  var mixin = this.needs('com/mixin');

  App.Router.map(function() {
    this.resource('workspace');
  });

  // Workspace

  App.WorkspaceRoute = Em.Route.extend({
    model: function() {
      return this.store.find('list');
    }
  });

  App.WorkspaceController = Em.ArrayController.extend({});

  App.WorkspaceView = Em.View.extend({
    classNames: ['workspace'],
    templateName: 'workspace'
  });

  // Add list

  App.AddListController = Em.Controller.extend({
    actions: {
      saveNewList: function(title) {
        this.get('store').createRecord('list', {
          title: title
        }).save();
      }
    }
  });

  App.AddListView = Em.View.extend(outerWatcher.mixin, {
    classNames: ['add-list'],
    classNameBindings: ['isAddingNewList'],
    templateName: 'add-list',
    isAddingNewList: false,
    title: '',
    titleIsEmpty: function() {
      return this.get('title').length === 0;
    },
    cancel: function() {
      this.set('isAddingNewList', false);
    },
    reset: function() {
      this.set('isAddingNewList', false);
      this.set('title', '');
    },
    actions: {
      addNewList: function() {
        this.set('isAddingNewList', true);
      },
      cancelAdding: function() {
        this.cancel();
      },
      saveNewList: function(event) {
        if (this.titleIsEmpty())
          return;
        this.get('controller').send('saveNewList', this.get('title'));
        this.reset();
      }
    },
    watchEvents: {
      outsideClick: function() {
        if (this.get('isAddingNewList'))
          this.cancel();
      },
      escapeKey: function() {
        if (this.get('isAddingNewList'))
          this.cancel();
      }
    }
  });

  // List

  App.List = DS.Model.extend({
    title: DS.attr('string'),
    note: DS.hasMany('note')
  });

  App.ListController = Em.ObjectController.extend({
    actions: {
      archiveList: function() {
        var list = this.get('model');
        list.deleteRecord();
        list.save();
      },
      addNewNote: function() {
      }
    }
  });

  App.ListView = Em.View.extend({
    classNames: ['list'],
    templateName: 'list'
  });

  // Note

  App.Note = DS.Model.extend({
    text: DS.attr('string')
  });

  App.NoteView = Em.View.extend({
    tagName: 'li',
    classNames: ['note'],
    templateName: 'note'
  });

});
