from flask import Flask, render_template
from flask_cors import CORS
from os import path
from db import get_session
from models import Company

app = Flask(__name__)
cors = CORS(app, resouces={r"/api/*": {"originsf": "*"}})
app.config.update(dict(DATABASE=path.join(path.dirname(app.root_path), 'itIndustry,db')))

@app.route('/')
def show():
    return '<h1>hello there</h1>'
