//require package in the project
const express = require('express')

const app = express()
const PORT = 3000

//Routes: index page
app.get('/', (req,res) => {
  res.send('test')
})

//Activate and listening on the express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})