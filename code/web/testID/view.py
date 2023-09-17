from flask import session, redirect, request
from flask_restful import Resource
from extensions.control import ctrl
import time


class testID(Resource):
    def post(self):
        try:
            id = request.form.get('id')
            whole = 0
            head = ['A', 'B', 'C', 'D']
            session['ques'] = ctrl.get_question_by_bookid(id)
            session['starttime'] = int(time.time())
            # return render_template(
            #     "testStart.html",
            #     status=session['status'],
            #     test=session['ques'],
            #     head=head,
            #     whole=whole,
            #     length=len(session['ques'])
            # )
            return {"msg": 200, "detail": "进入测试页", "data": {"html": "testStart.html", "status": session['status'], "test": session['ques'], "head": head, "whole": whole, "length": len(session['ques'])}}
        except:
            return {"msg": 500, "detail": "未初始化"}
