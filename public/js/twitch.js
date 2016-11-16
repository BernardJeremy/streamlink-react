$(function() {
  Twitch.init({clientId: client_id}, function(error, status) {
    if (status.authenticated) {
      // Already logged in, hide button
      $('.twitch-connect').hide()
    }

    $('.twitch-connect').click(function() {
      Twitch.login({scope: [], redirect_uri});
    })
  });
});
