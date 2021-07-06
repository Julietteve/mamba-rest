const { Schema, model} = require('mongoose')

const UserSchema = Schema({
    name:{
        type: String,
        required: [true, 'Compulsory name']
    },
    email:{
        type: String,
        required: [true, 'Compulsory e-mail'],
        unique:true
    },
    password:{
        type: String,
        required: [true, 'Compulsory password']
    },
    img:{
        type: String,
    },
    role:{
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type: String,
        default:true
    },
    google:{
        type: Boolean,
        default: false
    }
})

module.exports = model('User', UserSchema)