from flask import Blueprint
from flask_restful import Api
from web.submit.views import submit

submit_var = Blueprint('submit', __name__, url_prefix='/Submit')
submit_api = Api(submit_var)
submit_api.add_resource(submit, '/')
