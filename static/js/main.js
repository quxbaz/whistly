require.config({

  baseUrl: '/static/js/',

  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min'
  }

});

require(['app/app'], function(app) {
  console.log('Init app');
});
