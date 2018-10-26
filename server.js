require('dotenv').config();

let app = require('./libs/express');

require('./routes')(app);

let server = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + process.env.PORT);
});

let io = require('./libs/socket.io').init(server);
