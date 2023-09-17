from flask import Flask, session
from web.initial import initial
from web.homepage import homepage
from web.books import book
from web.bookDetails import bookDetail
from web.knowledgeTest import test_var
from web.login import login_var
from web.validation import validation_var
from web.register import register_var
from web.registration import registration_var
from web.profileInd import profile_var
from web.logout import logout_var

from web.testID import testID_var
from web.testSelected import testSelected_var
from web.testStart import testStart_var
from web.testStatistics import statistics_var
from web.submit import submit_var
from web.process import process_var
from extensions.secretKey import secretKey


app = Flask(__name__)
app.secret_key = secretKey()

app.config['SESSION_TYPE'] = 'filesystem'

app.register_blueprint(initial)
app.register_blueprint(homepage)
app.register_blueprint(book)
app.register_blueprint(bookDetail)
app.register_blueprint(test_var)
app.register_blueprint(login_var)
app.register_blueprint(validation_var)
app.register_blueprint(profile_var)
app.register_blueprint(register_var)
app.register_blueprint(registration_var)
app.register_blueprint(logout_var)

app.register_blueprint(testID_var)
app.register_blueprint(testSelected_var)
app.register_blueprint(testStart_var)
app.register_blueprint(statistics_var)
app.register_blueprint(submit_var)
app.register_blueprint(process_var)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
