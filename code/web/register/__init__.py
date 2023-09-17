from flask import Blueprint
from flask_restful import Api
from web.register.views import register

register_var = Blueprint('register', __name__, url_prefix='/Register')
register_api = Api(register_var)
register_api.add_resource(register, '/')
