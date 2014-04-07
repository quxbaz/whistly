/*
  local variables:
  buffer-name: "lists"
  end:
*/


define('lists', function() {

  App.Router.map(function() {
    this.resource('lists');
  });

  App.ListsRoute = Em.Route.extend({
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

  // Controller

  App.ListsController = Em.ArrayController.extend({});

  App.AddListController = Em.Controller.extend({
    actions: {
      saveNewList: function(title) {
        this.get('store').createRecord('list', {
          title: title
        }).save();
      }
    }
  });

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

  App.AddListView = Em.View.extend({
    classNames: ['add-list'],
    templateName: 'add-list',
    isAddingNewList: false,
    title: '',
    titleIsEmpty: function() {
      return this.get('title').length === 0;
    },
    actions: {
      addNewList: function() {
        this.set('isAddingNewList', true);
      },
      cancel: function() {
        this.set('isAddingNewList', false);
      },
      saveNewList: function(event) {
        if (this.titleIsEmpty())
          return;
        this.get('controller').send('saveNewList', this.get('title'));
        this.set('isAddingNewList', false);
        this.set('title', '');
      }
    }
  });

  App.ListsView = Em.View.extend({
    classNames: ['lists'],
    templateName: 'lists'
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
