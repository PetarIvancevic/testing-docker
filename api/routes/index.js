'use strict';

const cors = require('cors');
const controllers = require('../controllers');
const router = require('express').Router();

// Allow the api to accept request from web app
router.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS'
}));

// enable cors preflight for all endpoints
router.options('*', cors());

router.route('/pageInfo')
  .post(controllers.page.create);

router.route('/pageInfo/:pageId')
  .get(controllers.page.show);

module.exports = router;
