from flask import session, request
from flask_restful import Resource
from extensions.control import ctrl
import time
import ast


class submit(Resource):
    def post(self):
        # try:
        # http://castamerego.com/submit?{"titleID_choice":["0_弹指阁","1_一个月","18_黑龙江","24_紫"]}
        returnData = request.form.to_dict()
        choice = ast.literal_eval(returnData["titleID_choice"])

        session['choice'] = dict()
        for item in choice:
            session['choice'][item.split("_")[0]] = item.split("_")[1]

        test = session['ques']
        endtime = int(time.time())

        returnData.update({'test': test})
        returnData.update({"userid": session['User']["id"]})
        returnData.update({"titleID_choice": choice})
        returnData.update({"starttime": session['starttime']})
        returnData.update({"endtime": endtime})
        returnData.update({"questionnum": len(session['ques'])})

        ctrl.check(returnData)

        return {"msg": 200, "detail": "提交成功"}
        # except Exception as e:
        #     print(str(e))
        #     return {"msg": 500, "detail": "未初始化"}
