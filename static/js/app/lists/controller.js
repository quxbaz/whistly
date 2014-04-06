/*
  local variables:
  buffer-name: "gui/controller"
  end:
*/


App.GuiController = Em.Controller.extend({

  tokens: [],

  actions: {
    textChanged: function(tokens) {
      this.set('tokens', tokens);
      // _.each(tokens, function() {});
    }
  }

});
