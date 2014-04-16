/*
  local variables:
  buffer-name: "workspace/model"
  end:
*/


define('workspace/model', function(App) {

  App.Workspace = DS.Model.extend({
    title: DS.attr('string'),
    lists: DS.hasMany('list', {async: true})
  });

  App.List = DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.hasMany('note', {async: true})
  });

  App.Note = DS.Model.extend({
    text: DS.attr('string'),
    list: DS.belongsTo('list', {async: true})
  });

});
