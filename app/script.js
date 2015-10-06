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
});
