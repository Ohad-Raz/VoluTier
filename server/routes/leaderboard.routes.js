const {Router} = require('express')


const { getGlobalScores, getEmployeeScores } = require('../controllers/leaderBoard.controller')
const router = Router()


// router.get('/company',getScore)
router.get('/global',getGlobalScores)
router.get('/company-score/:companyID',getEmployeeScores)

module.exports = router