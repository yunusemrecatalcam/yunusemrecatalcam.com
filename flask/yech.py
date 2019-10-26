from flask import Flask,render_template,request,jsonify
import os

project_root = os.path.dirname(__file__)
template_path = os.path.join(project_root, 'templates')
app = Flask(__name__, template_folder=template_path)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/db")
def db():
    return render_template("index.html")

@app.route("/shitn")
def sihtty():
    return render_template("shit.html")
