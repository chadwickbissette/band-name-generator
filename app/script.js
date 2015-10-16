$(function() {

  $('button').click(function() {
    $.get('adjective', function(response){
      $('#adjective').text(response.word);
    });

    $.get('verb', function(response){
      $('#verb').text(response.word);
    });

    $.get('noun', function(response){
      $('#noun').text(response.word);
    });
  });

  $('#submitWords').on('submit', function(e){
    e.preventDefault(); //prevents reloading the page

    var adjective = $('input[name=adjective]').val();
    var adjPost;
    if(adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function (response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    var noun = $('input[name=noun]').val();
    var nounPost;
    if(noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function (response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }

    var verb = $('input[name=verb]').val();
    var verbPost;
    if(verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function (response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }
  });
});
