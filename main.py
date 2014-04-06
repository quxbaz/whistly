import flask
from flask import Flask, render_template, request, url_for, send_file
from conf import conf
from os import path, walk
# import random
# import uuid
# import json

app = Flask(__name__)
app.config.from_object(conf)

@app.route('/')
def index():
  scripts = find_js_files('static/js/app')
  return render_template('index.html', scripts=scripts)

def isScript(script):
  return path.splitext(script)[1] == '.js'

# Walks through root directories and compiles a list of file names.
def find_js_files(roots):
  if isinstance(roots, basestring):
    roots = [roots]
  js_files = []
  for root in roots:
    for (dirname, dirnames, filenames) in walk(root):
      js_files += [path.join(dirname, filename) for filename in filenames if isScript(filename)]
  return js_files

if __name__ == '__main__':
  app.run(debug=True)
