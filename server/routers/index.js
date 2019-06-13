const router = require('express').Router()
const userRoutes = require('./users')
const musicEventRoutes = require('./musicEvent')

router.use('/users', userRoutes)
router.use('/musicEvent', musicEventRoutes)

module.exports = router