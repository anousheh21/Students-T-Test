const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./views'))



app.listen(3000, () => {
    console.log('Server Listening on Port 3000')
})