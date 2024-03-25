const {Router} = require('express')


const { getGlobalScores, getEmployeeScores, getEmployeeVol } = require('../controllers/leaderBoard.controller')
const router = Router()


// router.get('/company',getScore)
router.get('/global',getGlobalScores)
router.get('/company-score/:companyID',getEmployeeScores)
router.get('/company-vol/:companyID',getEmployeeVol)

module.exports = router