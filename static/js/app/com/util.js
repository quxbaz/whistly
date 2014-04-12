/*
  local variables:
  buffer-name: "com/util"
  end:
*/


define('com/util', function() {

  var util = {};

  // Binds an event to an element and returns a function that removes
  // the event handler.
  util.bindEvent = function($el, event, handler, context) {
    var $el = $($el);
    var handler = _.bind(handler, context);
    $el.on(event, handler);
    return function() {
      $el.off(event, handler);
    };
  };

  util.dict = function(key, val) {
    var d = {};
    d[key] = val;
    return d;
  };

  return util;

});

define('util', function() {
  return this.needs('com/util');
});
