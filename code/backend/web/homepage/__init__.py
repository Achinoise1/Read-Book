from flask import Blueprint
from flask_restful import Api
from web.homepage.views import Index

homepage = Blueprint('homepage', __name__, url_prefix='/api')
homepage_api = Api(homepage)
homepage_api.add_resource(Index, '/Home')
