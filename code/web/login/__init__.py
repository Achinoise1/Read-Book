from flask import Blueprint
from flask_restful import Api
from web.login.views import login

login_var = Blueprint('login', __name__, url_prefix='/Login')
login_api = Api(login_var)
login_api.add_resource(login, '/')
