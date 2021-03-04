const Infomation = require('../models/Infomation');
const {multipleMongoooseToObject} = require('../../util/mongoose');

class ManagementController{
    index (req, res) {
        res.render('manage');
    }

    features(req, res) {
        res.render('feature',{
            isFeature: true,
        });
    }
}

module.exports = new ManagementController;