# app.py

from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "AgriGuide Backend Running Successfully!"

if __name__ == "__main__":
    app.run(debug=True)