from flask import session, request
from flask_restful import Resource
from extensions.control import ctrl
import time


class testSelected(Resource):
    def post(self):
        print(session)
        testType = request.form.get("selected")
        if testType == "random":  # 随机出题测试
            test = ctrl.get_question_random()
        else:  # 指定类型随机出题测试
            test = ctrl.get_question_by_category(testType)
            if test == []:
                return {"msg": 400, "detail": "没有该类型题目"}
        try:
            session['ques'] = test
            session['starttime'] = int(time.time())
            return {"msg": 200, "detail": "测试题目准备完成", "data": {"ques": session['ques'], "starttime": session['starttime']}}
        except:
            return {"msg": 500, "detail": "未初始化"}
