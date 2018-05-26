from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resouces={r"/api/*": {"originsf": "*"}})

@app.route('/')
def show():
    return '<h1>hello there</h1>'
