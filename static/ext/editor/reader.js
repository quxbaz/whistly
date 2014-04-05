/*
  reader.js

  Formats text content from HTML into a more readable form. E.g.,
  strips tags, formats whitespace/newlines, etc.

  Also parses text to be used in lists.
*/


var reader = {

  fmt: function(str) {
    // Takes a string and returns a formatted string.
    return str;
  },

  fmt$: function($el) {
    return reader.fmt($($el)[0].innerText);
  },

  // Parse a formatted string into structured tokens.
  parse: function(str) {

    var lines = str.split('\n');
    var tokens = [];

    /*
      Filter out any empty lines.
      Todo: Make more efficient. This loops through the list twice without needing to.
    */
    lines = _.chain(lines)
      .map(function(line) {
        return line.trim();
      }).filter(function(line) {
        return line.length > 0;
      }).value();

    var list;
    _.each(lines, function(line, i) {
      var isHeading = _.startsWith(line, '*');
      if (i == 0 || isHeading) {
        list = {
          heading: '',
          lines: []
        };
        tokens.push(list);
        if (isHeading)
          list.heading = reader.fmtHeading(line);
        else
          list.lines.push(line);
      } else {
        list.lines.push(line);
      }
    });

    return tokens;
  },

  fmtHeading: function(heading) {
    return _.trim(heading.replace(/^\**/g, ''));
  }

};

// CommonJS
if (typeof module !== 'undefined' && module.exports)
  module.exports = reader;
