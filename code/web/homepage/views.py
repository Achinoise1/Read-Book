import random
from flask import session, redirect
from extensions.control import ctrl
from flask_restful import Resource


class Index(Resource):
    def get(self):
        try:
            temp = random.randint(0, 200)
            detail = ctrl.get_book_detail_info(temp+1)
            return {"msg": 200, "detail": "进入首页", "data": {"html": 'index.html', "status": session['status'], "detail": detail, "bookReID": temp}}
        except Exception as e:
            # return redirect('/')
            return {"msg": 500, "detail": "未初始化"}
