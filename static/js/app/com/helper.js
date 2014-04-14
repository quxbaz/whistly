/*
  local variables:
  buffer-name: "com/helper"
  end:
*/


define('com/helper', function() {

  Em.Handlebars.helper('format-lines', function(value) {
    var escaped = Em.Handlebars.Utils.escapeExpression(value);
    return new Em.Handlebars.SafeString(_.trim(escaped).replace(/\n/gm, '<br />'));
  });

});
