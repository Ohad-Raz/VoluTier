const {Router} = require('express')


const { getGlobalScores, getEmployeeScores, getEmployeeVol, getGlobalEmpScores } = require('../controllers/leaderBoard.controller')
const router = Router()


// router.get('/company',getScore)
router.get('/global/company',getGlobalScores)
router.get('/company/score/:companyID',getEmployeeScores)
router.get('/company/vol/:companyID',getEmployeeVol)
router.get('/global/employee',getGlobalEmpScores)

module.exports = router