//require package in the project
const express = require('express')
const exhbs = require('express-handlebars')

const app = express()
const PORT = 3000

//Setting: template engine
app.engine('hbs', exhbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))
app.set('view engine', 'hbs')

//Routes: index page
app.get('/', (req,res) => {
  res.render('index')
})

//Activate and listening on the express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})