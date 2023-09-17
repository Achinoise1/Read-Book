from flask import Blueprint
from flask_restful import Api
from web.testStart.views import testStart

testStart_var = Blueprint('testStart', __name__, url_prefix='/TestStart')
testStart_api = Api(testStart_var)
testStart_api.add_resource(testStart, '/')
