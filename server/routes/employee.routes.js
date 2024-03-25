const {Router} = require('express')
const { empAuth } = require('../middleware/employee.middleware')
const {Register, Login} = require('../controllers/employee.controller')
const router = Router()

router.post('/register', Register)
router.post('/login',Login)


module.exports = router

