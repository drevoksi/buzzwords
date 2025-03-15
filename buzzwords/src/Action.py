from flask import Flask, request
from BuzzStatement import BuzzStatement

app = Flask(__name__)
buzz = BuzzStatement()
file_path = "/tmp/file.pdf"

@app.route('/upload',methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['the_file']
        f.save(file_path)
        # buzz.get_buzz_statement(file_path)
        print('Something something')
