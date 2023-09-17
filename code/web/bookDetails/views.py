from flask import session, redirect, request
from flask_restful import Resource
from extensions.control import ctrl


class bookDetails(Resource):
    def post(self):
        try:
            id = request.form.get('id')
            detail = ctrl.get_book_detail_info(int(id)+1)
            if (detail[16] or detail[17]):
                foreign = 1
            else:
                foreign = 0
            # return render_template(
            #     "bookDetail.html",
            #     detail=detail,
            #     foreign=foreign,
            #     status=session['status'],
            #     i=id
            # )
            return {"msg": 200, "detail": "进入书籍详情页", "data": {"html": "bookDetail.html", "detail": detail, "foreign": foreign, "status": session['status'], "i": id}}
        except Exception as e:
            return {"msg": 500, "detail": "未初始化"}
