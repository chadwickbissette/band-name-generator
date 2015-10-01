$(function(){
  var stringStock = ['ain\'t', 'nobody', 'got', 'time', 'for', 'that', 'your', 'grandmother', 'had', 'a', 'mother', 'frogs', 'in', 'africa', 'eat', 'fully', 'grown', 'adult', 'mice', 'cruel', 'world'];
  function generateRandomString() {
    var outputString = new String();
    var randomStringLength = Math.floor(Math.random()*100) //Up to 100 words long
    for (var i = 0; i < randomStringLength; i++) {
      var randomWord = stringStock[Math.floor(Math.random()*stringStock.length)];
      outputString += ' ' + randomWord;
    }
    return outputString;
  }
  $('button').click(function(){

    $('#output').html(generateRandomString());
  });
});
