//load express & router
const express = require('express')
const router = express.Router()

//Routes: index page
router.get('/', (req, res) => {
  res.render('index')
})

//export router
module.exports = router
