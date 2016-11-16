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

      let possibleFailText = (parsedUrl.mediaType === 'stream' ? "Stream seems to be offline" : "Video unavailable or sub-protected");

      getTwitchLinkService(parsedUrl, req.token).then(function(linksArray){
        socket.emit('server.GetDirectLink', {err: null, html: 'test< /br>test2'});
      }).catch(function(err){
        socket.emit('server.GetDirectLink', {err: "yep", html: possibleFailText});
      });
    });
  });

  return io;
};
