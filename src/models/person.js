let mongoose = require('mongoose');

let personShema = new mongoose.Schema({
    name: {
        type: String,
        required:true  // champs obligatoire
    },
    age : {
        type: Number,
        required:true,
    },
    favoriteFoods:{
        type: [String],
        default: []  // valeur par default
    }
})

module.exports = mongoose.model('Person', personShema)