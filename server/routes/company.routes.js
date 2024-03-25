const {Router} = require('express')
const {Register, Login, getCompanies, deleteCompany, addEmployeeToCompany,getCompany} = require('../controllers/company.controller')
const router = Router()
const { compAuth } = require('../middleware/company.middleware')

router.get('/',getCompanies)
router.get('/db' ,compAuth, getCompany)
router.post('/register', Register)
router.post('/login',Login)
router.post('/add', addEmployeeToCompany)
router.delete('/:companyId',deleteCompany)


module.exports = router

