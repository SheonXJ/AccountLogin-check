//require package in the project
const express = require('express')
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const USERS = require('./models/users')

const app = express()
const PORT = 3000

//Setting: database mongodb
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb is connected!')
})

//Setting: template engine
app.engine('hbs', exhbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))
app.set('view engine', 'hbs')
//Setting: body-parser
app.use(express.urlencoded({ extended: true }))

//Routes: index page
app.get('/', (req,res) => {
  res.render('index')
})

//Routes: catch login data at index page
app.post('/', (req,res) => {
  const inputEmail = req.body.email
  const inputPassword = req.body.password
  USERS.findOne({ email: inputEmail})
    .lean()
    .then(user => {
      if (!user || !(user.password === inputPassword)) {
        const status = 'error'
        return res.render('index', {status})
      }
      if (user.password === inputPassword) {
        return res.render('welcomePage', {user})
      } 
    })
    .catch(error => console.log(error))
})

//Activate and listening on the express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})