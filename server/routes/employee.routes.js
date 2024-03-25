const {Router} = require('express')
const { empAuth } = require('../middleware/employee.middleware')
const {Register, Login, getEmployees, deleteEmployee, getEmployee} = require('../controllers/employee.controller')
const router = Router()

router.get('/',getEmployees)
router.get('/db',empAuth, getEmployee)

router.post('/register', Register)
router.post('/login',Login)

router.delete('/:employeeId',deleteEmployee)


module.exports = router

