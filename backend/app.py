from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime as datetime

from models import db
from models.user import User
from models.group import Group

# Setup
app = Flask(__name__)

CORS(app) # To prevent CORS errors during local development
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config["MONGODB_HOST"] = "mongodb+srv://joonyoo181:yU20xMzrLK4N4uEu@tastebuds.syw7ofh.mongodb.net/?retryWrites=true&w=majority"

db.__init__(app)

# Routes
@app.route('/ping')
def pingpong():
    return "pong"

@app.route('/create-user', methods = ['POST'])
def create_user():
    body = request.get_json()
    new_user = User(**body).save()
    return jsonify(new_user)

@app.route('/get-users', methods = ['GET'])
def get_users():
    users = User.objects
    return jsonify(users)

@app.route('/create-group', methods = ['POST'])
def create_group():
    body = request.get_json()
    new_group = Group(**body).save()
    return jsonify(new_group)

@app.route('/get-group', methods = ['GET'])
def get_group():
    group = Group.objects
    return jsonify(group)

if __name__ == "__main__":
    app.run(debug=True)