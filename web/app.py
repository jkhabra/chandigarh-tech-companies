from flask import Flask, render_template, json, request, Response
from flask_cors import CORS
from os import path
from .company import create_company, get_companies

app = Flask(__name__)
cors = CORS(app, resouces={r"/api/*": {"originsf": "*"}})
app.config.update(dict(DATABASE=path.join(path.dirname(app.root_path), 'itIndustry,db')))

@app.route('/')
def show():
    return '<h1>hello there</h1>'


@app.route('/companies', methods=['POST', 'GET'])
def company_api():
    if request.method == 'POST':
        return create_company()
    if request.method == 'GET':
        return get_companies()
