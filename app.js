const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./router/AppRouter')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(router)


app.listen(process.env.PORT , ()=>{
    console.log('Server Running ' +  process.env.PORT)
})
