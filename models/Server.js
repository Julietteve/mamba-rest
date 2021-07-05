const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../db/config')
require('dotenv').config()

class Server {

    constructor(){

        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/users'
        
        // init DB
        this.conectDB()

        //Conexiones middleware
        this.middleware()

        //Rutas de la appp
        this.routes()
    }

    //middleware

    async conectDB (){
        await dbConnection()
    }

    middleware(){
        //CORS
        this.app.use( cors())
        //Lectura y parseo de body para req via POST
        this.app.use(express.json())
        //Directorio público
        this.app.use(express.static('public'))
    }

    routes(){  
        this.app.use(this.userPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening on port ${this.port}`)
        })
    }
}

module.exports = Server