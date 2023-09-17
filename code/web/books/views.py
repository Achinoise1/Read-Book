from flask import session, request
from flask_restful import Resource, reqparse
from extensions.control import ctrl
import traceback


class books(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument(
            'start', type=int, required=True, location='form')
        self.parser.add_argument(
            'end', type=int, required=True, location='form')

    def post(self):
        args = self.parser.parse_args()
        try:
            start = int(args.get('start'))-1
            end = int(args.get('end'))
            books = ctrl.get_book_brief_info()[start:end]
            # return render_template(
            #     'books.html',
            #     status=session['status'],
            #     book=books
            # )
            if start < 0:
                return {"msg": 400, "detail": "开始限制小于1"}
            if books != []:
                result = [{'id': item[0], 'name': item[1],
                           'author': item[2]} for item in books]
                return {"code": 200, "msg": "进入书籍详情页", "data": result}
        except Exception as e:
            print(traceback.format_exc())
            return {"msg": 500, "detail": "未初始化"}
