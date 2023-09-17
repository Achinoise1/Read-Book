from flask import session
from flask_restful import Resource
from extensions.control import ctrl
import time


class statistics(Resource):
    def post(self):
        try:
            session['anytest'] = 0
            session['stat'] = 1
            session['test'] = 0
            if session['status'] == 1:
                # return render_template(
                #     "profile.html",
                #     status=session['status']
                # )
                return {"msg": 403, "detail": "未登录"}
        except Exception as e:
            print(str(e))
            return {"msg": 500, "detail": "未初始化"}

        if session['status'] == 2:
            data = ctrl.get_user_statistics(int(session['User']["id"]))
            if data == None:
                session['anytest'] = 1
                # return render_template(
                #     "statistics.html",
                #     status=session['status'],
                #     anytest=session['anytest']
                # )
                return {"msg": 302, "detail": "未进行过测试"}
            else:
                avgDuration = str(
                    data["avgduration"]//60) + "分"+str(data["avgduration"] % 60)+"秒"
                avgAccuracy = int(data["avgscore"])
                lastDuration = str(
                    data["lastduration"]//60) + "分"+str(data["lastduration"] % 60)+"秒"
                lastAccuracy = int(data["lastscore"])
                lastTime = time.strftime(
                    "%Y年%m月%d日 %H时%M分%S秒", time.localtime(data["lasttime"]))
                # return render_template(
                #     'statistics.html',
                #     status=session['status'],
                #     username=session['User']["name"],
                #     times=data["count"],
                #     avgDuration=avgDuration,
                #     avgAccuracy=avgAccuracy,
                #     lastDuration=lastDuration,
                #     lastAccuracy=lastAccuracy,
                #     lastTime=lastTime,
                #     anytest=session['anytest'],
                #     Testscore=data["scores"]
                # )
                return {"msg": 200, "detail": "获取成功", "data": {"username": session['User']["name"], "times": data["count"], "avgDuration": avgDuration, "avgAccuracy": avgAccuracy, "lastDuration": lastDuration, "lastAccuracy": lastAccuracy, "lastTime": lastTime, "anytest": session['anytest'], "Testscore": data["scores"]}}
