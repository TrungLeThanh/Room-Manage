const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Infomation = new Schema({
    name: { type: String, default: 'Trung' },
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Infomation', Infomation);
