import flask
from flask import Flask, render_template, request, url_for
from conf import conf
# import random
# import uuid
# import json

app = Flask(__name__)
app.config.from_object(conf)

@app.route('/')
def main():
  return render_template('main.html')

if __name__ == '__main__':
  app.run(host='localhost', debug=True)
