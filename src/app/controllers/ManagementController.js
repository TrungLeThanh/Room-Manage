
class ManagementController{
    index (req, res) {
        res.render('manage');
    }
}

module.exports = new ManagementController;