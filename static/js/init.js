/*
  init.js
*/


// Mix underscore.str functions into _ namespace for more convenient access.
_.mixin(_.str.exports());

(new pillar.Package({global: true}));
