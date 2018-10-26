const getDirectLinkController = require('./controllers/getDirectLink');

module.exports = (socket) => {
  /*
    webapp.GetDirectLink
   */
  socket.on('webapp.GetDirectLink', (req) => {
    getDirectLinkController.getDirectLink(socket, req);
  });
};
