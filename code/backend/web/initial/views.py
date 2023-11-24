from flask import redirect, session, request
from flask_restful import Resource


class PreProcessing(Resource):
    def get(self):
        try:
            session.clear()
            # register--0|login--1|info--2
            session['status'] = 2
            # login error
            session['error'] = 0
            # register error pw!=pw2--1|not all--2
            session['retry'] = 0
            # user info
            session['User'] = {"id": "2", "name": "", "pw": "",
                               "gender": "", "tele": "", "brief": ""}
            # 从test进入
            session['test'] = 0
            # 从statistics进入
            session['stat'] = 0
            # 从题库抽出的问题
            session['ques'] = []
            # 测试的开始时间
            session['starttime'] = 0
            # 是否进行过测试
            session['anytest'] = 0
            # 选择的内容
            session['choice'] = 0

            # return redirect('/Home')
            return {"msg": 200, "detail": "初始化成功"}
        except:
            return {"msg": 404, "detail": "初始化失败", "data:": "null"}
