const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    }, 
    location: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: [true, 'banner image is required'] 
    },
    date:{
        type: Date,
        require: true
    },
    slug: {
        type: [String],
        require: true
    }
})

const registerModel = mongoose.model('registerModel', registerSchema);
module.exports = registerModel;