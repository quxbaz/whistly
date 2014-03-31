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
  return render_template('index.html')

# Walks through root directories and compiles a list of file names.
def find_js_files(roots):
  if isinstance(roots, basestring):
    roots = [roots]
  js_files = []
  for root in roots:
    for (dirname, dirnames, filenames) in walk(root):
      js_files += [path.join(dirname, filename) for filename in filenames if isScript(filename)]
  print js_files
  return js_files


if __name__ == '__main__':
  app.run(debug=True)
