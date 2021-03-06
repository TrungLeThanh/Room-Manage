const express = require('express');
const router = express.Router();

const managementController = require('../app/controllers/ManagementController');

router.delete('/general/:id', managementController.destroy);
router.get('/general',managementController.show);
router.post('/',managementController.generalPost);
router.get('/',managementController.index);


module.exports = router;    


    