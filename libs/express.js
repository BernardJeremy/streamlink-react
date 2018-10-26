const express = require('express');
const Router = require('named-routes');
const morgan = require('morgan');
const helmet = require('helmet')

module.exports.app = {};

module.exports = function initExpress() {

  let expressRouter = express.Router();
  let _router = new Router();
  _router.extendExpress(expressRouter);

  // init express
  let app = express();
  app.use(helmet());
  app.use('/', expressRouter);

  if (process.env.DEBUG === 'true') {
    app.use(morgan('dev'));
  }

  // init all routes
  require('../routes')(expressRouter);

  // init global middleware
  _router.registerAppHelpers(app);

  // init static & rendering files
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/../public'));
  app.use('/jquery', express.static(__dirname + '/../node_modules/jquery/dist/'));
  app.use('/socket.io', express.static(__dirname + '/../node_modules/socket.io-client/'));

  module.exports.app = app;

  return app;
};
