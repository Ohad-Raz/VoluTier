const {Router} = require('express')
const { empAuth } = require('../middleware/employee.middleware')
const {Register, Login, getEmployees, deleteEmployee, getEmployee, updateLevelIfRequired} = require('../controllers/employee.controller')
const router = Router()

router.get('/',getEmployees)
router.get('/db',empAuth, getEmployee)

router.post('/register', Register)
router.post('/login',Login)
router.post('/:employeeId/updateLevel', updateLevelIfRequired)
router.delete('/:employeeId',deleteEmployee)


module.exports = router

