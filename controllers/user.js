const {response} = require('express')
const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const getUsers = (req,res=response)=>{
    res.json({res:'lov u!'})
}

const postUsers = async (req,res=response)=>{ 
    const {name,email,password,role} = req.body
    const user = new User({name,email,password,role})

    //Verificar que no exista la contraseña
    const uniqueEmail = await User.findOne({email})

    if(uniqueEmail){
        return res.status(400).json({
            msg: 'Already registrated user email'
        })
    }
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password,salt)
    
    await user.save()

    res.json({res: user})
}

const putUsers = (req,res=response)=>{
    const {id}= req.params

    res.json({res:id})
}

module.exports = {
    getUsers,
    postUsers,
    putUsers
}