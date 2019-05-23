var express = require('express'),
    app = express(),
    request = require('request'),
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
      "https://purr.objects-us-east-1.dream.io/i/103_-_17XSD30.gif"
    ]

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    var url = images[Math.floor(Math.random() * images.length)];
    res.render(
        'index',
        { title: 'Catweb', url: url})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})