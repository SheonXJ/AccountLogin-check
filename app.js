//require package in the project
const express = require('express')
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const router = require('./routes/index')
require('./config/mongoose')

const app = express()
const PORT = 3000

//Setting: template engine
app.engine('hbs', exhbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))
app.set('view engine', 'hbs')
//Setting: body-parser
app.use(express.urlencoded({ extended: true }))
//Setting: router
app.use(router)

//Activate and listening on the express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})