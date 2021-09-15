//require package in the project
const mongoose = require('mongoose')

//Setting: database
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true }) 
const db = mongoose.connection

db.on('error', () => {
  console.log('error')
})
db.once('open', () => {
  console.log('mongodb is connected!')
})

module.exports = db