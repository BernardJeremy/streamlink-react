const socketIO = require('socket.io');

module.exports.init = function(server, conf, app) {
  let io = socketIO(server);

  io.on('connection', function(socket){

  });

  return io;
};
