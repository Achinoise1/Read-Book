import random
from flask import session, redirect
from extensions.control import ctrl
from flask_restful import Resource


class Index(Resource):
    def get(self):
        try:
            temp = random.randint(0, 200)
            detail = ctrl.get_book_detail_info(temp+1)
            print(detail)
            wrap = {}
            attr = ['id', 'name', 'author', 'country', 'publisher',
                    'year', 'page', 'price', 'frame', 'category',
                    'isbn', 'star', 'comment_num', 'brief', 'douban_bookid',
                    'link', 'name_o', 'trans']
            for i in range(len(attr)):
                wrap[attr[i]] = detail[i]
            return {"msg": 200, "detail": "进入首页", "data": wrap}
        except Exception as e:
            # return redirect('/')
            return {"msg": 500, "detail": "未初始化"}
