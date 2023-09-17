from flask import Blueprint
from flask_restful import Api
from web.testSelected.views import testSelected

testSelected_var = Blueprint(
    'testSelected', __name__, url_prefix='/TestSelected')
testSelected_api = Api(testSelected_var)
testSelected_api.add_resource(testSelected, '/')
