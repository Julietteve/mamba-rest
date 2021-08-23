const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const {getUsers, postUsers, putUsers} = require('../controllers/user')
const { validateFields } = require('../middlewares/validations')
const Role = require('../models/Rol')


//middleware es una funcion que se ejecuta antes de acceder al controlador. Se puede utilizar como 2do argumento de la ruta

router.get('/', getUsers)
router.post('/', [
    check('name', 'Must add a name').not().isEmpty(),
    check('password', 'Must add a password >6 chars').isLength({min:6}),
    check('email', 'Not valid email').isEmail(),
    check('role').custom( async (role='')=>{
        const realRole = await Role.findOne({role})
        if(!realRole){
            throw new Error(`ROLE ${role} not registered`)
        }
    }),
    validateFields
] ,postUsers)
router.put('/:id', putUsers)

module.exports = router