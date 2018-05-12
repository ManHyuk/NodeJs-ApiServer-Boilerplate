'use strict';

const userCtrl = require('../controllers/UserCtrl');

module.exports = (router) => {

  router.route('/signup')
    .get(userCtrl.signup);


  return router;
};