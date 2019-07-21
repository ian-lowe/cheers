import requests
import os

from flask import Flask, render_template, jsonify
app = Flask(__name__)

# Check for environment variable
if not os.getenv("API_KEY"):
    raise RuntimeError("API_KEY is not set")

@app.route('/')
def index():

    url = "https://listen-api.listennotes.com/api/v2/podcasts/ff9de4bef29f4153a84fceb1207daa57?sort=recent_first"
    headers = {'X-ListenAPI-Key': os.getenv("API_KEY")}

    r = requests.get(url, headers=headers)
    r_json = r.json()

    return render_template('index.html', r_json=r_json)

@app.route('/api')
def api():

    url = "https://listen-api.listennotes.com/api/v2/podcasts/ff9de4bef29f4153a84fceb1207daa57?sort=recent_first"
    headers = {'X-ListenAPI-Key': '5cfb6fbdb8634fc5babf82b88fa8c58a'}

    r = requests.get(url, headers=headers)
    r_json = jsonify(r.json())

    return r_json