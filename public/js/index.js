// When the browser is ready...
$(function() {
  var socket = io();

  // validate
  $('#linkForm').validate({
      // Set the validation rules
      rules: {
          link: {
              required: true,
              url: true
          },
      },
      // Specify the validation error messages
      messages: {
          link: 'Please enter a valid URL',
      },
      // submit handler
      submitHandler: function(form) {
        var token = Twitch.getToken();
        if (!token) {
          token = '';
        }

        socket.emit('webapp.GetDirectLink', {url: $("#linkInput").val(), token});
        $('.links').html('Processing...');
        $('.links').show();
        socket.on('server.GetDirectLink', function(linksObj) {
          console.log(linksObj);
          var text = linksObj.html;

          if (linksObj.err !== null && linksObj.html === null) {
            text = "Sorry, an error happened :(";
          }
          $('.links').html(text);
       })
      }
  });
});
