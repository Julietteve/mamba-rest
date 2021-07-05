const moongose = require('mongoose')

const dbConnection = async ()=>{

    try{
       await moongose.connect(process.env.MONGO_CNN, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify: false
       }) 
       console.log('DB inicializada ...')
    }
    catch (err){
        console.log(err)
        throw new Error('Error inicializando db')
    }
}

module.exports = {
    dbConnection
}