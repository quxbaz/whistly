/*
  local variables:
  buffer-name: "view"
  end:
*/


define('view', function(App) {

  App.ApplicationView = Em.View.extend({
    elementId: 'app',
    templateName: 'application',
  });

});
