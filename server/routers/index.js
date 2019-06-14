const router = require('express').Router()
const userRoutes = require('./users')
const musicEventRoutes = require('./musicEvent')
const holidayRoutes = require('./holidays')

router.use('/users', userRoutes)
router.use('/musicEvent', musicEventRoutes)
router.use('/holidays', holidayRoutes)

module.exports = router