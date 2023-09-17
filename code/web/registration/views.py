from flask import session, request, redirect
from flask_restful import Resource, reqparse
from extensions.control import ctrl


class registration(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        try:
            session['error'] = 0
            session['retry'] = 0
            parser.add_argument('pwReg', type=str, required=True)
            parser.add_argument('pw2Reg', type=str, required=True)
            pw = request.form.get('pwReg')
            pw2 = request.form.get('pw2Reg')
            if pw == pw2:
                name = request.form.get("nameReg")
                gender = request.form.get("genderReg")
                tele = request.form.get("teleReg")
                brief = request.form.get("briefReg")
                if(name and gender and tele and brief and pw and pw2):
                    id = ctrl.new_user(name, gender, tele, pw, brief)
                    session['status'] = 1
                    # return render_template(
                    #     "validation.html",
                    #     status=session['status'],
                    #     id=id
                    # )
                    return {"msg": 200, "detail": "进入验证页面", "data": {"html": "validation.html", "status": session['status'], "id": id}}
                else:
                    session['retry'] = 2
                    # return render_template(
                    #     "profile.html",
                    #     status=session['status'],
                    #     retry=session['retry']
                    # )
                    return {"msg": 400, "detail": "xx字段不能为空", "data": {"html": "profile.html", "status": session['status'], "retry": session['retry']}}
            else:
                session['retry'] = 1
                # return render_template(
                #     "profile.html",
                #     status=session['status'],
                #     retry=session['retry']
                # )
                return {"msg": 400, "detail": "密码错误，请重新输入", "data": {"html": "profile.html", "status": session['status'], "retry": session['retry']}}
        except:
            return redirect('/')
