from flask import Blueprint
from flask_restful import Api
from web.process.views import process

process_var = Blueprint('process', __name__, url_prefix='/Process')
process_api = Api(process_var)
process_api.add_resource(process, '/')
