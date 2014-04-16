/*
  local variables:
  buffer-name: "com/helper"
  end:
*/


define('com/helper', function() {

  var helper = function() {
    return Em.Handlebars.helper.apply(Em.Handlebars, arguments);
  };

  helper('format-lines', function(value) {
    var escaped = Em.Handlebars.Utils.escapeExpression(value);
    return new Em.Handlebars.SafeString(_.trim(escaped).replace(/\n/gm, '<br />'));
  });

  helper('try-else', function(value, elseValue) {
    if (value)
      return value;
    else
      return elseValue;
  });

});
