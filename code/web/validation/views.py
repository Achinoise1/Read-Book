from flask import session, redirect, request
from flask_restful import Resource, reqparse
from extensions.control import ctrl
import traceback


class validation(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument(
            'id', type=int, required=True, location='form')
        self.parser.add_argument(
            'pwd', type=str, required=True, location='form')

    def post(self):
        try:
            args = self.parser.parse_args()
        except:
            return {"code": 400, "msg": "输入内容有误"}
        try:
            temp_user = ctrl.get_user_info_by_id(args['id'])
            if temp_user[4] == args['pwd']:
                info = {"id": temp_user[0], "name": temp_user[1], "gender": temp_user[2],
                        "tele": temp_user[3], "pw": temp_user[4], "brief": temp_user[5]}
                return {"code": 200, "msg": "密码正确", "data": info}
            else: return {"code": 403, "msg": "密码错误"}
        except IndexError:
            return {"code": 404, "msg": "该用户不存在"}
        # try:
        #     session['error'] = 0
        #     session['retry'] = 0
        #     pw = str(request.form.get('pw'))
        #     id = int(request.form.get('id'))
        #     temp = ctrl.get_user_info_by_id(id)
        #     try:
        #         # 是否输对密码
        #         if temp[4] == pw:
        #             session['User'] = {"id": temp[0], "name": temp[1], "gender": temp[2],
        #                                "tele": temp[3], "pw": temp[4], "brief": temp[5]}
        #             session['status'] = 2

        #             # 如果从test栏进入，返回test界面
        #             if session['test'] == 1:
        #                 session['test'] = 0
        #                 return redirect('/KnowledgeTest')

        #             # 如果从stat栏进入，返回stat界面
        #             elif session['stat'] == 1:
        #                 session['stat'] = 0
        #                 # return redirect(url_for('statistics'))
        #                 return {"msg": 200, "detail": "登录成功，跳转到统计界面"}

        #             # 否则返回首页
        #             else:
        #                 try:
        #                     return redirect('/Home')
        #                 except:
        #                     return redirect('/Login')

        #         # 输错密码
        #         else:
        #             print(2)
        #             session['error'] = 1
        #             # return render_template(
        #             #     "profile.html",
        #             #     status=session['status'],
        #             #     error=session['error']
        #             # )
        #             return {"msg": 400, "detail": "密码错误"}
        #     # 没输入密码
        #     except:
        #         print(3)
        #         session['error'] = 1
        #         # return render_template(
        #         #     "profile.html",
        #         #     status=session['status'],
        #         #     error=session['error']
        #         # )
        #         return {"msg": 400, "detail": "未初始化"}
        # except:
        #     return redirect('/')
