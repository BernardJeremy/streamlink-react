const homeController = require('./controllers/home');

module.exports = (app) => {
  /*
    HOME
   */
  app.get('/', homeController.view);

};
