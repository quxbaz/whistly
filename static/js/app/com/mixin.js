/*
  local variables:
  buffer-name: "com/mixin"
  end:
*/


define('com/mixin', function() {

  var mixin = {route: {}, controller: {}, view: {}};

  mixin.view.WatchForEscape = Em.Mixin.create({
    didInsertElement: function() {
      var that = this;
      var callback = function(event) {
        var key = event.keyCode || event.which;
        if (key === 27) {
          if (!that.hitEscapeKey)
            throw "You need to define a [hitEscapeKey] method in your view.";
          that.hitEscapeKey.apply(that, arguments);
        }
      };
      $(document).on('keydown', callback);
      this.offWatchForEscape = function() {
        $(document).off('keydown', callback);
      };
    },
    willDestroyElement: function() {
      if (this.offWatchForEscape) this.offWatchForEscape();
    }
  });

  return mixin;

});
