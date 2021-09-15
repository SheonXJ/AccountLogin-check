//load express & router
const express = require('express')
const router = express.Router()
const USERS = require('../../models/users')

//Routes: catch login data at index page
router.post('/', (req, res) => {
  const inputEmail = req.body.email
  const inputPassword = req.body.password
  USERS.findOne({ email: inputEmail })
    .lean()
    .then(user => {
      if (!user || !(user.password === inputPassword)) {
        const status = 'error'
        return res.render('index', { status })
      }
      if (user.password === inputPassword) {
        return res.render('welcomePage', { user })
      }
    })
    .catch(error => console.log(error))
})

//export router
module.exports = router