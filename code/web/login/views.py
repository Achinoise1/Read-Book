from flask import session, redirect
from flask_restful import Resource


class login(Resource):
    def post(self):
        try:
            session['status'] = 1
            session['test'] = 0
            session['stat'] = 0
            # return render_template(
            #     'profile.html',
            #     status=session['status'],
            #     error=session['error'],
            #     retry=session['retry']
            # )
            return {"msg": 200, "detail": "进入登录页面", "data": {"html": "profile.html", "status": session['status'], "error": session['error'], "retry": session['retry']}}
        except:
            return redirect('/')
