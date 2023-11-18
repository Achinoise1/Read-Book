from flask import session, redirect
from flask_restful import Resource, reqparse
import json


class process(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument(
            'questions', type=str, required=True, location='form')
        self.parser.add_argument(
            'choice', type=str, required=True, location='form')

    def post(self):
        args = self.parser.parse_args()
        questions = json.loads(args['questions'])['data']['ques']
        choice = json.loads(args['choice'])
        choiceKeys = list(choice.keys())
        ans = {}
        for c in choiceKeys:
            choice[int(c)] = choice.pop(c)

        choiceKeys = list(choice.keys())
        print(choiceKeys)
        for i in range(len(questions)):
            if i not in choiceKeys:
                ans[i] = 2
            elif questions[i]["Ans"] == choice[i]:
                ans[i] = 1
            else:
                ans[i] = 0
        print(ans)
        try:
            # return {"code": 200, "msg": "查看卷面", "data": {"html": "process.html", "status": session['status'], "whole": whole, "head": head, "length": len(session['ques']), "test": session['ques'], "choice": session['choice']}}
            return {"code": 200, "msg": "查看卷面", "data": {"questions": questions, "choice": choice, "ans": ans}}
        except:
            return {"msg": 500, "detail": "未初始化"}
