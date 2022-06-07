
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const connectDb = require('./config/db')
const cors= require('cors')
connectDb()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/docs',require('./routes/apiRoutes'))

app.listen(port,(req,res)=>{
  console.log('server statred on port'+ process.env.PORT)
})
