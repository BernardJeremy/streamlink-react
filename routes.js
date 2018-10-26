const homeController = require('./controllers/home');

module.exports = function (app) {
  /*
    HOME
   */
  app.get('/', homeController.view);

};
