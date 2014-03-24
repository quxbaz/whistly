/*
  local variables:
  buffer-name: "util/reader"
  end:

  Formats text content from HTML into a more readable form. E.g.,
  strips tags, formats whitespace/newlines, etc.

  Also parses text to be used in lists.
*/


var reader = {

  fmt: function(str) {
    // Takes a string and returns a formatted string.
    return str;
  },

  $fmt: function($el) {
    return this.fmt($($el)[0].innerText);
  },

  parse: function(str) {
    // Parse a formatted string into structured tokens.

    log('** Parse');

    var lines = str.split('\n');
    log(lines);

    return str;
  }

};
