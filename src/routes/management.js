const express = require('express');
const router = express.Router();

const managementController = require('../app/controllers/ManagementController');

router.get('/feature',managementController.features);
router.get('/',managementController.index);


module.exports = router;