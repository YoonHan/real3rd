# -*- coding: utf-8 -*-

import os
import sys
import time
import hashlib
from threading import Thread
from flask import Flask

app = Flask(__name__)
app_name = 'real3rd'
root_dir = os.path.dirname(os.getcwd())
hash_mod = hashlib.sha1()
app.config['PHOTO_UPLOAD_FOLDER'] = './app/static/photo/'
app.config['PHOTO_DOWNLOAD_FOLDER'] = os.path.join(root_dir, app_name, 'app', 'static', 'photo/')
app.config['SECRET_KEY'] = 'real'

from app import views
