from flask import Blueprint
from flask_restful import Api
from web.validation.views import validation

validation_var = Blueprint('validation', __name__, url_prefix='/api')
validation_api = Api(validation_var)
validation_api.add_resource(validation, '/validation')
