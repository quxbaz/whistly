from os import path, walk
import flask
from flask import Flask, render_template, request, url_for, send_file
from flask.ext.assets import Environment, Bundle
from conf import conf

app = Flask(__name__)
app.config.from_object(conf)

assets = Environment(app)
assets.config['less_bin'] = path.join(conf.PROJECT_PATH, 'node_modules/.bin/lessc')

css = Bundle('less/style.less', filters='less', output='cache/style.css')
assets.register('style', css)

@app.route('/')
def index():
  scripts = find_files('static/js/app', '.js')
  return render_template('index.html', scripts=scripts)

def is_type(filename, filetype):
  return path.splitext(filename)[1] == filetype

# Walks through root directories and compiles a list of file names.
def find_files(roots, filetype):
  if isinstance(roots, basestring):
    roots = [roots]
  js_files = []
  for root in roots:
    for (dirname, dirnames, filenames) in walk(root):
      js_files += [path.join(dirname, filename) for filename in filenames if is_type(filename, filetype)]
  return js_files

if __name__ == '__main__':
  app.run(debug=True)
