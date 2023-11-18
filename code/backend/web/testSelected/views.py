from flask import session, request
from flask_restful import Resource, reqparse
from extensions.control import ctrl
import time


class testSelected(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument(
            'type', type=str, required=True, location='form')

    def post(self):
        args = self.parser.parse_args()
        testType = args.get("type")
        if testType == "random":  # 随机出题测试
            test = ctrl.get_question_random()
        else:  # 指定类型随机出题测试
            test = ctrl.get_question_by_category(testType)
            if test == []:
                return {"msg": 400, "detail": "没有该类型题目"}
        try:
            return {"code": 200, "msg": "测试题目准备完成", "data": {"ques": test, "starttime": int(time.time())}}
        except:
            return {"code": 500, "msg": "未初始化"}
