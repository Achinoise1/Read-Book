from flask import Blueprint
from flask_restful import Api
from web.registration.views import registration

registration_var = Blueprint(
    'regislation', __name__, url_prefix='/api')
registration_api = Api(registration_var)
registration_api.add_resource(registration, '/registration')
