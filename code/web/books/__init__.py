from flask import Blueprint
from flask_restful import Api
from web.books.views import books

book = Blueprint('book', __name__, url_prefix='/api')
book_api = Api(book)
book_api.add_resource(books, '/Book')
