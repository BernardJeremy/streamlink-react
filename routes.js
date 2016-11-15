const homeController = require('./controllers/home');

module.exports = function (router, conf, app) {
  /*
    HOME
   */
  router.get('/', 'home', homeController.view);

};
