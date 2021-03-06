const General = require('../models/General');
const {multipleMongoooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');

class ManagementController{
    index (req, res) {
        res.render('manage');
    }

    show(req, res, next) {
        General.find({})
            .then(generals=>{
                res.render('general',{
                    generals: multipleMongoooseToObject(generals),
                    isFeature: true,
                })
            })
            .catch(next);


    }

    generalPost(req, res, next){
        const formData = req.body;
        const general = new General(formData);
        general.save()
            .then(()=>res.redirect('/manage/general'))
            .catch(err=>{
        });
    }


    destroy(req, res, next){
        General.deleteOne({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);
    }
}

module.exports = new ManagementController;