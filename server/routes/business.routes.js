const {Router} = require('express')
const {Register, Login, getBusinesses, deleteBusiness, updateBusiness} = require('../controllers/business.controller')
const router = Router()

router.get('/',getBusinesses)
// router.get('/db' ,compAuth, getCompany)
router.post('/register', Register)
router.post('/login',Login)
router.patch('/:businessId', updateBusiness)
router.delete('/:businessId',deleteBusiness)

module.exports = router
