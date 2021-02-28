const express = require('express');
const router = express.Router();

const managementController = require('../app/controllers/ManagementController');

router.get('/',managementController.index);

module.exports = router;