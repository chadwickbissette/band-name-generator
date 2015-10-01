var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var Adjectives = function() {
  this.useless = true;
  this.stupid = true;
  this.unnecessary = true;
  this.repetitive = true;
};

var adjective = new Adjective();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random()*propArray.length)];
  return {word: randomProp};
}

app.get("/", function(req, res) {
  res.send("hello, universe!");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.listen(port, function(){
  console.log('server started on port ' + port);
});



