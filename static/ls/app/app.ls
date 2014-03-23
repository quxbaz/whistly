## app.ls


define [] ->
  App = Em.Application.create {
    LOG_TRANSITIONS:true
  }
  window.App = App
