from flask import session
from flask_restful import Resource


class testStart(Resource):
    def get(self):
        try:
            whole = 0
            head = ['A', 'B', 'C', 'D']
            # return render_template(
            #     "testStart.html",
            #     status=session['status'],
            #     test=session['ques'],
            #     head=head,
            #     whole=whole,
            #     length=len(session['ques'])
            # )
            return {"msg": 200, "datail": "进入测试界面", "data": {"test": session['ques'], "head": head, "whole": whole, "length": len(session['ques'])}}
        except Exception as e:
            return {"msg": 500, "detail": "未初始化"}
