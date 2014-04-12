/*
  local variables:
  buffer-name: "outerwatcher"
  end:

  Watches for events outside of a view that affect that view.
*/


// TODO: Open source this. Remove usage of libraries.

define('outerWatcher', function(util) {

  // TODO:
  // - Allow extending of watchers with custom events.

  var errorMsg = "Watcher event not supported by default and has not been added.";

  var watchers = {

    // Watches for any clicks on the document.
    documentClick: function(fn) {
      return util.bindEvent(document, 'click', fn, this);
    },

    // Watches for any clicks outside of the view element.
    outsideClick: function(fn) {
      return util.bindEvent(document, 'click', function(event) {
        if ($(event.target).closest(this.$()).length === 0
            && $.contains(document, event.target)) {
          fn.apply(this, arguments);
        }
      }, this);
    },

    // Watches for the escape key.
    escapeKey: function(fn) {
      return util.bindEvent(document, 'keydown', function(event) {
        if ((event.keyCode || event.which) === 27)
          fn.apply(this, arguments);
      }, this);
    }

  };

  var outerWatcher = {

    // NOTE: The handler shouldn't have to return an off function.
    addEvent: function(name, sel, event, handler) {
      _.extend(watchers, util.dict(name, function(fn) {
        return util.bindEvent($(sel), event, handler);
      }));
    },

    mixin: Em.Mixin.create({
      init: function() {
        var that = this;
        _.each(this.get('watchEvents'), function(handler, event) {
          if (_.has(watchers, event)) {
            that.one('didInsertElement', function() {
              var off = watchers[event].call(that, handler);
              that.one('willDestroyElement', off);
            });
          } else
            throw errorMsg;
        });
        return this._super.apply(this, arguments);
      }
    })

  };

  return outerWatcher;

});
