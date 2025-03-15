from flask import Flask
from BuzzStatement import BuzzStatement

buzz = BuzzStatement()

@app.route('/get-buzz-statement',methods=['POST'])
def get_buzz_statement(file_path):
    buzz.get_buzz_statement(file_path)