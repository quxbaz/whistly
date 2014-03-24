import flask
from flask import Flask, render_template, request, url_for, send_file
from conf import conf
# import random
# import uuid
# import json

app = Flask(__name__)
app.config.from_object(conf)

@app.route('/')
def index():
  return send_file('templates/index.html')
  # return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)
