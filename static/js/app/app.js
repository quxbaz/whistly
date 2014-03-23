define(['lib/Editor'], function(Editor) {

  var ret = {};

  ret.run = function() {

    log('app.run');

    var $lists = $('.lists');

    function render(text) {

      if (typeof text === 'undefined')
        return;

      $lists.empty();

      var lines = text.split('\n');
      var $list = null;

      _.each(lines, function(line) {

        line = _(line).trim();

        if (line.length == 0)
          return;

        if ($list == null || _(line).startsWith('*')) {

          line = line.replace(/^\** */, '');

          // TODO: Why is a new line being created when text is empty.
          // todo: Optimize this.
          if (line.length == 0)
            return;

          $list = $('<div/>', {class: 'list'});
          $('<div/>', {class: 'inner'}).appendTo($list);
          $('<h1/>', {text: line}).appendTo($('.inner', $list));
          $list.appendTo($lists);

        } else {

          $('<div/>', {class: 'line', text: line})
            .appendTo($('.inner', $list));

        }


      });

    }

    function getEditorText() {
      return $('.editor textarea').val();
    }

    $('textarea').on('input', function(e) {
      render(getEditorText());
    });

    // TEST
    render(getEditorText());

    var editor = new Editor();
    $('.text-editor-placeholder').replaceWith(editor.render());

  };

  return ret;

});
