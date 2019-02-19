#Need to modularize the Flask logic
from flask import Flask
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

@app.route('/')
def hello():
	print('Hello world!')
	return 'Hello world!'

@app.route('/nothing')
def handleNothing():
	return 'Nothing!'

#BROKEN
@app.route('/signup/?<string:name>', methods = ['GET', 'POST'])
def signup(name):
	if request.method == 'GET':
		return Person.query.filter_by(name=name)
	if request.method == 'POST':
		db.session.add(name)
		db.session.commit()

if __name__ == '__main__':
	app.run()