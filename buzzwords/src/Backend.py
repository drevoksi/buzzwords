from flask_cors import CORS
from BuzzStatement import BuzzStatement
from flask import Flask, request, jsonify
import os
import sys
import tempfile

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")
bs = BuzzStatement()

def process_pdf(file_path):
    return bs.get_buzz_statement(file_path)

# @app.after_request
# def no_cors(response):
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     return response

# @app.route('/')
# def hello():
#     return jsonify({"message": "Server is running correctly!"})

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
        file.save(temp_file.name)
        extracted_text = process_pdf(temp_file.name)
        os.unlink(temp_file.name)

    response = jsonify({'text': extracted_text})
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
    return response

if __name__ == '__main__':
    app.run(debug=True)