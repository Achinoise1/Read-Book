from flask import session, redirect
from flask_restful import Resource


class process(Resource):
    def post(self):
        try:
            whole = 0
            head = ['A', 'B', 'C', 'D']
            # return render_template(
            #     "process.html",
            #     status=session['status'],
            #     whole=whole,
            #     head=head,
            #     length=len(session['ques']),
            #     test=session['ques'],
            #     choice=session['choice']
            # )
            return {"msg": 200, "detail": "查看卷面", "data": {"html": "process.html", "status": session['status'], "whole": whole, "head": head, "length": len(session['ques']), "test": session['ques'], "choice": session['choice']}}
        except:
            return {"msg": 500, "detail": "未初始化"}
