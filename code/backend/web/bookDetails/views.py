from flask import session, request
from flask_restful import Resource, reqparse
from extensions.control import ctrl


class bookDetails(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument("id", type=int, required=True, location="form")

    def post(self):
        try:
            id = request.form.get("id")
            detail = ctrl.get_book_detail_info(int(id))
            if detail[16] or detail[17]:
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
            if detail != []:
                detail = {
                        "id": detail[0],
                        "name": detail[1],
                        "author": detail[2],
                        "country": detail[3],
                        "publisher": detail[4],
                        "year": detail[5],
                        "page": detail[6],
                        "price": detail[7],
                        "frame": detail[8],
                        "category": detail[9],
                        "isbn": detail[10],
                        "star": detail[11],
                        "comment_num": detail[12],
                        "brief": detail[13],
                        "douban_bookid": detail[14],
                        "link": detail[15],
                        "name_o": detail[16],
                        "trans": detail[17]
                    }
            return {
                "code": 200,
                "msg": "进入书籍详情页",
                "data": detail
            }
        except Exception as e:
            import traceback
            print(traceback.format_exc())
            return {"msg": 500, "detail": "未初始化"}
