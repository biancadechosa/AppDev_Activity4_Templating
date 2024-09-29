const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', controller.start);
router.get('/about', controller.about);
router.get('/products', controller.products);
router.get('/service', controller.service);
router.get('/team', controller.team);
router.get('/facts', controller.facts);

module.exports = router;