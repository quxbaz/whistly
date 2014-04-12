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

  App.WorkspaceRoute = Em.Route.extend({
    model: function() {
      return this.store.find('list');
    }
  });

  // Models

  App.List = DS.Model.extend({
    title: DS.attr('string'),
    items: DS.hasMany('list_item')
  });

  App.ListItem = DS.Model.extend({
    text: DS.attr('string')
  });

  // Controllers

  App.AddListController = Em.Controller.extend({
    actions: {
      saveNewList: function(title) {
        this.get('store').createRecord('list', {
          title: title
        }).save();
      }
    }
  });

  App.WorkspaceController = Em.ArrayController.extend({});

  App.ListController = Em.ObjectController.extend({
    actions: {
      archive: function() {
        var list = this.get('model');
        list.deleteRecord();
        list.save();
      }
    }
  });

  // Views

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

  App.WorkspaceView = Em.View.extend({
    classNames: ['workspace'],
    templateName: 'workspace'
  });

  App.ListView = Em.View.extend({
    classNames: ['list'],
    templateName: 'list'
  });

  App.ListItemView = Em.View.extend({
    tagName: 'li',
    classNames: ['list-item'],
    templateName: 'list-item'
  });

});