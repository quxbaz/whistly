## main.ls


require.config {
  baseUrl: '/static/lsc/',
  paths:
    moment: '/static/lib/moment/2.3.1/moment.min'
}

require [

  ## App
  'app/app'
  'app/route'
  'app/controller'

  ## Editor
  'app/editor/view'

  ],

  (app) ->
    true
