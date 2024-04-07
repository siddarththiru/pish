const mongoose = require('mongoose');
const {Schema}= mongoose

const userSchema =new Schema({
    fname: String,
    lname: String,
    email:{
        type:String,
        unique: true
    },
    username:{
        type:String,
        unique: true
    },
    password:String
})

const UserModel = mongoose.model('User',userSchema)

module.exports= UserModel;