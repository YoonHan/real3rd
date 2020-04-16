# -*- coding: utf-8 -*-

import sys
import json
import time as ptime
import random
import os

from flask import render_template, flash, redirect, session, url_for, request,\
    g, jsonify, send_file
from app import app, hash_mod


@app.route("/")
def real_main():
    return render_template('real_main.html')


@app.route("/about")
def real_about():
    return render_template('real_about.html')

@app.route("/portfolio")
def real_portfolio():
    return render_template('real_portfolio.html')

@app.route("/activity")
def real_activity():
    return render_template('real_activity.html')


@app.route("/people")
def real_people():
    return render_template('real_people.html')

@app.route("/activity/hackweek")
def real_activity_hackweek():
    return render_template('real_activity_hackweek.html')

@app.route("/activity/hackweek2")
def real_activity_hackweek2():
    return render_template('real_activity_hackweek_2.html')


@app.route("/chat")
def real_chat():
    return render_template('real_chat.html')



ALLOWED_PHOTO_EXTENSIONS = set(['png','jpg','jpeg','gif'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_PHOTO_EXTENSIONS


@app.route("/apply")
def apply():
	return render_template("real_apply.html")


@app.route('/apply/profile', methods=['POST'])
def upload_file():
    file = request.files['upload_file']

    hash_mod.update(str(ptime.time()))
    image_filename = hash_mod.hexdigest()[:10] + '.'+file.filename.split('.')[-1]

    if file and allowed_file(file.filename):
        filename = image_filename
        file.save(os.path.join(app.config['PHOTO_UPLOAD_FOLDER'], filename))
        return jsonify({'filename':filename})
    return jsonify({'message':'not supported file format'}),400

@app.route('/apply/profile/<filename>')
def get_profile(filename):
    return send_file(os.path.join(app.config['PHOTO_DOWNLOAD_FOLDER'],
                               filename))


