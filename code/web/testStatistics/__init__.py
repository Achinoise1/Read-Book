from flask import Blueprint
from flask_restful import Api
from web.testStatistics.views import statistics

statistics_var = Blueprint('statistics', __name__, url_prefix='/Statistics')
statistics_api = Api(statistics_var)
statistics_api.add_resource(statistics, '/')
