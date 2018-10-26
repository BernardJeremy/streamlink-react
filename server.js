require('dotenv').config();
const SocketIO = require('socket.io');

const app = require('./libs/express');
require('./routes')(app);

const websocketsRouter = require('./websockets');

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

const io = SocketIO(server);
io.on('connection', (socket) => {
  websocketsRouter(socket);
});