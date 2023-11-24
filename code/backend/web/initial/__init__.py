from flask import Blueprint
from flask_restful import Api
from web.initial.views import PreProcessing

initial = Blueprint('initial', __name__, url_prefix='/api')
initial_api = Api(initial)
initial_api.add_resource(PreProcessing, '/initial')
