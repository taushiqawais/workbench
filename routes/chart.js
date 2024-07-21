const express = require('express');
const chartController = require('../controllers/chart');

const router = express.Router();

router.get('/home', chartController.getHomePage);

module.exports = router;