const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const General = new Schema({
    name_inn: { type: String, default: 'a' },
    address: { type: String, default: 'dfsf'},
    phone: { type: String, default: '1545421'},
    room_empty: { type: String, default: '15'},
    room_number: { type: String, default: '54'}
});

module.exports = mongoose.model('General', General);
