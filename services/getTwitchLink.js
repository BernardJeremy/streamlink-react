const getTwitchLink = require('node-twitch-link');

module.exports = (url, token) => {
  if (token) {
    token = { oauth_token: token };
  } else if (process.env.HOST_OAUTH) {
    token = { oauth_token: process.env.HOST_OAUTH }
  } else {
    token = { client_id: process.env.CLIENT_ID }
  }

  return new Promise((resolve, reject) => {
    getTwitchLink(url, token).then((ret) => {
      let html = ''
      for (let i in ret) {
        html += '<p>'
          + '<a href="' + ret[i].url + '" target="_blank">' + ret[i].type + '</a>'
          + '</p>';
      }
      resolve(html);
    }).catch((err) => {
      console.log("Error : ", err.message);
      reject(err);
    });
  });
}
