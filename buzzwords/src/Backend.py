from flask_cors import CORS
from BuzzStatement import BuzzStatement
from flask import Flask, request, jsonify
import os
import tempfile

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
bs = BuzzStatement()

def process_pdf(file_path):
    return bs.get_buzz_statement(file_path)

# @app.after_request
# def no_cors(response):
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     return response

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

    return jsonify({'text': "HELLOHELLO"})

if __name__ == '__main__':
    app.run(debug=True)