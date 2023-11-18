from flask import Blueprint
from flask_restful import Api
from web.bookDetails.views import bookDetails

bookDetail = Blueprint("bookDetails", __name__, url_prefix="/api")
bookDetail_api = Api(bookDetail)
bookDetail_api.add_resource(bookDetails, "/BookDetails")
