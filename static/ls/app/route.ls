## route.ls


define ['app/app'] (App) ->
  App.Router.map ->
    @resource 'foo'
    @resource 'bar'
