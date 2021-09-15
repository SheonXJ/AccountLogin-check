//load Express & router
const express = require('express')
const router = express.Router()

//load modules
const home = require('./modules/home')
router.use('/', home)

const accountLogin = require('./modules/accountLogin')
router.use('/', accountLogin)

//export router
module.exports = router