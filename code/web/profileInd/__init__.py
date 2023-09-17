from flask import Blueprint
from flask_restful import Api
from web.profileInd.views import profileInd

profile_var = Blueprint('profile', __name__, url_prefix='/Profile')
profile_api = Api(profile_var)
profile_api.add_resource(profileInd, '/')
