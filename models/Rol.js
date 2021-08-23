const { Schema,model} = require('mongoose')

const RoleSchema = Schema({
    role:{
        type: String,
        require:[true, 'Role requiered']
    }
})

module.exports = model ('Role', RoleSchema)