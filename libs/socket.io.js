const socketIO = require('socket.io');
const urlParser = require('js-video-url-parser');

const getTwitchLinkService = require('../services/getTwitchLink');

module.exports.init = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    socket.on('webapp.GetDirectLink', (req) => {
      const parsedUrl = urlParser.parse(req.url);

      if (!parsedUrl) {
        socket.emit('server.GetDirectLink', { err: "yep", html: "Twitch URL not recognized or incomplete" });
        return;
      }

      const possibleFailText = req.url.indexOf('videos') === -1 ?
        "Stream seems to be offline" :
        "Video unavailable or sub-protected";

      getTwitchLinkService(req.url, req.token).then((html) => {
        socket.emit('server.GetDirectLink', { err: null, html });
      }).catch((err) => {
        socket.emit('server.GetDirectLink', { err: "yep", html: possibleFailText });
      });
    });
  });

  return io;
};
