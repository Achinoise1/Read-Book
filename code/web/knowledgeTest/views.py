from flask import redirect, session
from flask_restful import Resource


class test(Resource):
    def get(self):
        try:
            if session['status'] == 1:
                session['test'] = 1
                session['stat'] = 0
                # return render_template(
                #     "profile.html",
                #     status=session['status']
                # )
                return {"msg": 403, "datail": "请先登录！", "data": {"html": "profile.html", "status": session['status']}}
            if session['status'] == 2:
                # return render_template(
                #     'test.html',
                #     status=session['status'],
                # )
                return {"msg": 200, "detail": "进入测试页", "data": {"html": "test.html", "status": session['status']}}
        except:
            return redirect('/')
