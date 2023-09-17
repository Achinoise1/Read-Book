from flask import Blueprint
from flask_restful import Api
from web.logout.views import logout

logout_var = Blueprint('logout', __name__, url_prefix='/Logout')
logout_api = Api(logout_var)
logout_api.add_resource(logout, '/')
