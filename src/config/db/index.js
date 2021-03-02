const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/phongtrotot_final', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully!!');
    } catch (error) {
        console.log('Connect falure!!');
    }

}

module.exports = { connect };