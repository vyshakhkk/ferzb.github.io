$('.submit-message').click(function() {
  $.post( 
  
  "submit.php", //url
  
  { 
    email: $('[name="user-email"]').val(),
    name: $('[name="user-name"]').val(),
    subject: $('[name="user-subject"]').val(),
    message: $('[name="user-message"]').val()
  }, 
  
  function( data ) { 
    $( ".result" ).html(data);
  }
  
  );
});