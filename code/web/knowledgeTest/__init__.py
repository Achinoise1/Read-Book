from flask import Blueprint
from flask_restful import Api
from web.knowledgeTest.views import test

test_var = Blueprint('test', __name__, url_prefix='/KnowledgeTest')
test_api = Api(test_var)
test_api.add_resource(test, '/')
