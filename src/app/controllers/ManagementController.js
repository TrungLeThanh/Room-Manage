
class ManagementController{
    index (req, res) {
        res.render('manage');
    }

    features(req, res) {
        res.render('feature');
    }
}

module.exports = new ManagementController;