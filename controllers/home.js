const conf = require('../config/config.json');

exports.view = function(req, res) {
  let authUrl = "https://api.twitch.tv/kraken/oauth2/authorize" +
    "?response_type=token" +
    "&client_id=" + conf.client_id +
    "&redirect_uri=" + conf.redirect_uri
    ;
  res.render("index.ejs", {
    client_id: conf.client_id,
    redirect_uri: conf.redirect_uri
  });
};
