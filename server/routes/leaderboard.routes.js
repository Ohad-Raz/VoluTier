const {Router} = require('express')


const { getGlobalScores } = require('../controllers/leaderBoard.controller')
const router = Router()


// router.get('/company',getScore)
router.get('/global',getGlobalScores)

module.exports = router