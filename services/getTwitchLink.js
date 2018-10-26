const getTwitchLink = require('node-twitch-link');

module.exports = function(url, token) {
  if (typeof token !== 'undefined' && token !== '') {
    token = {oauth_token: token};
  } else if (typeof process.env.HOST_OAUTH !== 'undefined' && process.env.HOST_OAUTH !== '') {
    token = {oauth_token: process.env.HOST_OAUTH}
  } else {
    token = {client_id: process.env.CLIENT_ID}
  }

  return new Promise(function(resolve, reject) {
    getTwitchLink(url, token).then(function(ret){
      let html = ''
      for (let i in ret) {
        html += '<p>'
        + '<a href="' + ret[i].url + '" target="_blank">' + ret[i].type + '</a>'
        +'</p>';
      }
      resolve(html);
    }).catch(function(err){
      console.log("Error : ", err.message);
      reject(err);
    });
  });
}
