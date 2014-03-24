/*
  main.js
*/


require.config({

  // TODO: Remove this in production.
  urlArgs: "ts="+new Date().getTime(),

  baseUrl: '/static/js',
  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min'
  }

});

require(

  [

    // App
    'app/app',
    'app/controller',
    'app/route',

    // Common
    'common/view',

    // Editor
    'app/editor/view',
    'app/editor/controller',

    // GUI
    'app/gui/view',
    'app/gui/controller',

  ],

  function(app) {
    return true;
  }

);
