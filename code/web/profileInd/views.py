from flask import session, redirect
from flask_restful import Resource


class profileInd(Resource):
    def post(self):
        try:
            session['User'] = {"id": 2, "name": "WYJ",
                               "gender": "F", "tele": "19157701137", "brief": "xxx"}
            # return render_template(
            #     'profile.html',
            #     status=session['status'],
            #     id=session['User']["id"],
            #     name=session['User']["name"],
            #     gender=session['User']["gender"],
            #     tele=session['User']["tele"],
            #     brief=session['User']["brief"]
            # )
            return {"msg": 200, "detail": "进入个人信息页", "data": {"html": "profile.html", "status": session['status'], "User": session['User']}}
        except Exception as e:
            return {"msg": 400, "detail": str(e)}
