from flask import Flask, render_template
import random

app = Flask(__name__)

# list of cat images
images = [
    "https://purr.objects-us-east-1.dream.io/i/Uv3oc.jpg",
    "https://purr.objects-us-east-1.dream.io/i/sKy1t.jpg",
    "https://purr.objects-us-east-1.dream.io/i/FbtHG.gif",
    "https://purr.objects-us-east-1.dream.io/i/tumblr_m4qgtaTpka1ruesl6o1_1280.jpg",
    "https://purr.objects-us-east-1.dream.io/i/N0EGB.jpg",
    "https://purr.objects-us-east-1.dream.io/i/XWSY6.jpg",
    "https://purr.objects-us-east-1.dream.io/i/UP5SI.png",
    "https://purr.objects-us-east-1.dream.io/i/awwwww.jpg",
    "https://purr.objects-us-east-1.dream.io/i/kyfPV.jpg",
    "https://purr.objects-us-east-1.dream.io/i/thyc9.gif",
    "https://purr.objects-us-east-1.dream.io/i/BPU3b.jpg",
    "https://purr.objects-us-east-1.dream.io/i/103_-_17XSD30.gif",
]

@app.route('/')
def index():
    url = random.choice(images)
    return render_template('index.html', url=url)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
