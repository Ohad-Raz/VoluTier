const {Router} = require('express')
const {Register, Login} = require('../controllers/company.controller')
const router = Router()

router.post('/register', Register)
router.post('/login',Login)


module.exports = router

