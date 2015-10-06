var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var Adjective = function() {
  this.dopey = true;
  this.sneezy = true;
  this.happy = true;
  this.grumpy = true;
  this.sleepy = true;
  this.bashful = true;
};

var Verb = function() {
  this.attempt = true;
  this.sneeze = true;
  this.help = true;
  this.complain = true;
  this.sleep = true;
  this.blush = true;
};

var Noun = function() {
  this.disadvantage = true;
  this.allergy = true;
  this.happiness = true;
  this.attitude = true;
  this.bed = true;
  this.aversion = true;
};

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random()*propArray.length)];
  return {word: randomProp};
}

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
  res.sendFile(index.html);
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get("/verb", function(req, res) {
  res.json(getRandomWord(verb));
});

app.get("/noun", function(req, res) {
  res.json(getRandomWord(noun));
});

app.listen(port, function(){
  console.log('server started on port ' + port);
});



