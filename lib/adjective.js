'USE STRICT'
// module.exports = {}; //this already exists in node, is manipulated in the function below (a contained scope) and then exported

var Adjective = function() {
  this.dopey = true;
  this.sneezy = true;
  this.happy = true;
  this.grumpy = true;
  this.sleepy = true;
  this.bashful = true;
};
module.exports = Adjective;

