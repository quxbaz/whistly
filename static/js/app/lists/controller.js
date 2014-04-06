/*
  local variables:
  buffer-name: "lists/controller"
  end:
*/


define('lists/controller', function(App) {

  App.GuiController = Em.Controller.extend({

    tokens: [],

    actions: {
      textChanged: function(tokens) {
        this.set('tokens', tokens);
        // _.each(tokens, function() {});
      }
    }

  });

});
