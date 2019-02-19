#Need to modularize the Flask logic
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:8milerun@localhost/testdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #Turn off annoying message
db = SQLAlchemy(app)

#Should create schema if it doesn't already exist
#

class Person(db.Model):
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	name = db.Column(db.String(80), unique=False, nullable=False)

db.create_all()
testQueryObj = Person.query.get(1)
print('Here is the test query:\t {0}'.format(testQueryObj.name))

#This works
# eg = Person(name='what')
# db.session.add(eg)
# db.session.commit()

@app.route('/')
def hello():
	print('Hello world!')
	return 'Hello world!'

@app.route('/nothing')
def handleNothing():
	return 'Nothing!'

#BROKEN
@app.route('/signup', methods = ['GET', 'POST'])
def signup():
	print('signup!')
	print(request)
	if request.method == 'POST':
		json_data = request.get_json()
		addData = Person(name=json_data.get('name'))
		#req_name = request.form['name']
		#addData = Person(name=req_name)
		#addData = Person(name=param)
		db.session.add(addData)
		db.session.commit()
# @app.route('/?<name>')
# def success(name):
#    return 'welcome %s' % name

if __name__ == '__main__':
	app.run()