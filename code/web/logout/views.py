from flask import session, redirect
from flask_restful import Resource


class logout(Resource):
    def post(self):
        try:
            if session['status'] == 2:
                session['status'] = 1
                return {"msg": 200, "detail": "登出成功！", "data": {'status': 1}}
            else:
                return {"msg": 400, "detail": "登出失败！", "data": {'status': session['status']}}
        except:
            return {"msg": 500, "detail": "未初始化"}
            # return redirect('/')
