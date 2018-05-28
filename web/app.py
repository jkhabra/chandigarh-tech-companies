from flask import Flask, render_template, json, request
from flask.json import jsonify
from flask_cors import CORS
from os import path
from db import get_session
from models import Company
from .validations import validate_create_company_data

app = Flask(__name__)
cors = CORS(app, resouces={r"/api/*": {"originsf": "*"}})
app.config.update(dict(DATABASE=path.join(path.dirname(app.root_path), 'itIndustry,db')))

@app.route('/')
def show():
    return '<h1>hello there</h1>'


@app.route('/companies', methods=['POST'])
def createCompany():
   data = request.get_json()
   db_session = get_session()

   if validate_create_company_data(data):
       return jsonify({
           'status': 'error',
           'message': 'data is not invalid'
       })

   try:
       if not db_session.query(Company).filter(Company.name == data['name']).all():

           new_company = Company(name=data['name'], logo=data['logo'], \
                 established=data['established'], website=data['website'], type=data['type'])

           db_session.add(new_company)
           db_session.commit()

   except Exception as error:
       return jsonify({
           'status': 'error',
           'message': 'could not add data into databae'
       })

   db_session.close()
   return jsonify ({
       'status': 'success'
   })
