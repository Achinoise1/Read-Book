from flask import session, request
from flask_restful import Resource, reqparse
from extensions.control import ctrl
import time
import math
import json


class submit(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('userId', type=int,
                                 required=True, location='form')
        self.parser.add_argument('userChoice', type=str,
                                 required=True, location='form')
        self.parser.add_argument('testType', type=str,
                                 required=True, location='form')
        self.parser.add_argument('startTime', type=int,
                                 required=True, location='form')
        self.parser.add_argument('endTime', type=int,
                                 required=True, location='form')
        self.parser.add_argument('ques', type=int,
                                 required=True, location='form')

    def post(self):
        args = self.parser.parse_args()
        args['userChoice'] = json.loads(args['userChoice'])
        args['testType'] = json.loads(args['testType'])

        # try:
        # http://castamerego.com/submit?{"titleID_choice":["0_弹指阁","1_一个月","18_黑龙江","24_紫"]}

        # returnData = request.form.to_dict()
        # choice = ast.literal_eval(returnData["titleID_choice"])

        # session['choice'] = dict()
        # for item in choice:
        #     session['choice'][item.split("_")[0]] = item.split("_")[1]

        # test = session['ques']
        # endtime = int(time.time())

        returnData = dict() 
        returnData.update({'test': args['testType']})
        returnData.update({"userid": args["userId"]})
        returnData.update({"titleID_choice": args['userChoice']})
        returnData.update({"starttime": math.floor(args['startTime'] / 1000)})
        returnData.update({"endtime": math.floor(args['endTime'] / 1000)})
        returnData.update({"questionnum": args['ques']})

        try:
            ctrl.check(returnData)
        except:
            return {"code": 500, 'msg':'提交失败'} 

        return {"code": 200, "msg": "提交成功"}
        # except Exception as e:
        #     print(str(e))
        #     return {"msg": 500, "detail": "未初始化"}
