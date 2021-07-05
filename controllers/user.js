const {response} = require('express')

const getUsers = (req,res=response)=>{
    res.json({res:'lov u!'})
}

const postUsers = (req,res=response)=>{
    const {name}= req.body

    res.json({res:`lov u a lot! ${name}`,})
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