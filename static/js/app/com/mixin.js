/*
  local variables:
  buffer-name: "com/mixin"
  end:
*/


define('com/mixin', function() {

  var util = this.needs('com/util');
  var mixin = {route: {}, controller: {}, view: {}, component: {}};

  /*

    TODO: Implement this.

    // In view properties

    watchers: ['escapeKey', 'click']

    watcherHandlers: {
      escapeKey: function(event) {
        ...
      },
      click: function(event) {
        ...
      }
    }

  */

  mixin.view.WatchForEscape = Em.Mixin.create({

    _watchForEscape: function() {

      var detach = util.bindEvent(document, 'keydown', function(event) {
        var key = event.keyCode || event.which;
        if (key === 27) {
          if (!this.watchForEscape)
            throw "You need to define a [watchForEscape] method in your view.";
          this.watchForEscape.apply(this, arguments);
        }
      }, this);

      this.one('willDestroyElement', detach);

    }.on('didInsertElement')

  });

  return mixin;

});
