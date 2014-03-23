require.config({
  baseUrl: '/static/js',
  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min'
  }
});

require(

  [

    // App
    'app/app',
    'app/route',
    'app/controller',

    // Editor
    'app/editor/view',
    'app/editor/controller',

    // GUI
    'app/gui/view',
    'app/gui/controller'

  ],

  function(app) {
    return true;
  }

);
