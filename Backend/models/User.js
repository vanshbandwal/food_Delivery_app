const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const User = mongoose.model('User',userschema)
module.exports = User;