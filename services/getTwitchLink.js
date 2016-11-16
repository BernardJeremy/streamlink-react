const getTwitchLink = require('node-twitch-link');
const conf = require('../config/config.json');

module.exports = function(parsedUrl, token) {
  let type = (parsedUrl.mediaType === 'stream' ? 'channel' : 'video');
  let target = (parsedUrl.mediaType === 'stream' ? parsedUrl.channel : parsedUrl.id.replace('v', ''));

  if (typeof token !== 'undefined' && token !== '') {
    token = {oauth_token: token};
  } else {
    token = {client_id: conf.client_id}
  }

  return new Promise(function(resolve, reject) {
    getTwitchLink(type, target, token).then(function(ret){
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
