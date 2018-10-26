const homeController = require('./controllers/home');

module.exports = function (router) {
  /*
    HOME
   */
  router.get('/', 'home', homeController.view);

};
