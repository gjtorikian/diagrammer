# pip3 install flask nltk spacy flask-cors
# python3 -m spacy download en_core_web_sm
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

import logging

import spacy
from spacy import displacy

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.DEBUG)

@app.route('/make', methods=['POST'])
def make():
  nlp = spacy.load("en_core_web_sm")

  data = request.get_json()
  sentence = data['sentence']

  doc = nlp(sentence)
  options = {"compact": True, "bg": "#09a3d5",
           "color": "white", "font": "Source Sans Pro"}

  svg = displacy.render(doc, style="dep", options=options, jupyter=False)

  return jsonify({"svg": svg})

if __name__ == '__main__':
    app.run(host="localhost", port=8123, debug=True)
