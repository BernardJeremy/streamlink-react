const socketIO = require('socket.io');
const urlParser = require('js-video-url-parser');

const getTwitchLinkService = require('../services/getTwitchLink');

module.exports.init = function(server, conf, app) {
  let io = socketIO(server);

  io.on('connection', function(socket){
    socket.on('webapp.GetDirectLink', function(req) {
      let parsedUrl = urlParser.parse(req.url);

      if (!parsedUrl) {
        socket.emit('server.GetDirectLink', {err: "yep", html: "Twitch URL not recognized or incomplete"});
        return;
      }

      let possibleFailText = (req.url.indexOf('videos') === -1 ? "Stream seems to be offline" : "Video unavailable or sub-protected");

      getTwitchLinkService(req.url, req.token).then(function(html){
        socket.emit('server.GetDirectLink', {err: null, html});
      }).catch(function(err){
        socket.emit('server.GetDirectLink', {err: "yep", html: possibleFailText});
      });
    });
  });

  return io;
};
