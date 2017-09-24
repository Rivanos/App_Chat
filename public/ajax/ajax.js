$('#send').on('click', function() {
  var message = $('#message').val();
  $.ajax({ url: '../pages/chat.ejs'
       , type: 'post'
       , dataType: 'html'
       , data: {messages: messages}
      })
  .done(function(data) {
    $('#affichage').html(data);
  })
  .fail(function() {
    console.log("Something went wrong!");
  });
})
