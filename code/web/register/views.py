from flask import session, redirect
from flask_restful import Resource


class register(Resource):
    def post(self):
        try:
            session['status'] = 0
            # return render_template(
            #     "profile.html",
            #     status=session['status'],
            #     error=session['error'],
            #     retry=session['retry']
            #     )
            return {"msg": 200, "datail": "进入注册界面", "data": {"html": "profile.html", "status": session['status'], "error": session['error'], "retry": session['retry']}}
        except:
            return {"msg": 500, "detail": "未初始化"}
