from flask import jsonify

def make_field_absent_error(field):
    return jsonify({
        'status': 'error',
        'message': '{} is required'.format(field)
    })

def validate_create_company_data(data):
    if not data['logo']:
        return make_field_absent_error('logo')

    if not data['name']:
        return make_field_absent_error('name')

    if not data['established']:
        return make_field_absent_error('established')

    if not data['website']:
        return make_field_absent_error('website')

    if not data['type']:
        return make_field_absent_error('type')
