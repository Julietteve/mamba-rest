const {Router} = require('express')
const router = Router()
const {getUsers, postUsers, putUsers} = require('../controllers/user')

router.get('/', getUsers)
router.post('/', postUsers)
router.put('/:id', putUsers)

module.exports = router