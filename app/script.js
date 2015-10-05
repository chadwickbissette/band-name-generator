$(function() {
  $('button').click(function() {
    $.get('adjective', function(response){
      $('#adjective').text(response.word);
    });
  });
});
