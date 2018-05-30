from flask import Flask, render_template, json, request, Response
from flask.json import jsonify
from db import get_session
from models import Company
from .validations import validate_create_company_data

def create_company():
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

def get_companies():
    db_session = get_session()
    companies = []
    total = db_session.query(Company).count()
    db_data = db_session.query(Company).all()

    for i in db_data:
        c_dict = {'id': i.id, 'name':i.name, 'logo':i.logo, 'established':i.established, 'website':i.website, 'type':i.type}
        companies.append(c_dict)

    data = {
        'total': total,
        'data': companies
    }

    db_session.close()
    return Response(json.dumps(data), mimetype='application/json')
