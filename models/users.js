const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new Schema({
  firstName: {type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
})

module.exports = mongoose.model('USERS', usersSchema)