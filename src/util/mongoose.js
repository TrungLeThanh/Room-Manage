//Lấy đối tượng từ courses
module.exports = {
    multipleMongoooseToObject: mongooses=>{
        return mongooses.map(mongooses => mongooses.toObject());
    },

    mongooseToObject: mongoose=>{
        return  mongoose ? mongoose.toObject() : mongoose;
    }
}