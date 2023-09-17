from flask import Blueprint
from flask_restful import Api
from web.testID.view import testID

testID_var = Blueprint('testID', __name__, url_prefix='/TestID')
testID_api = Api(testID_var)
testID_api.add_resource(testID, '/')
