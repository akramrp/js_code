const express = require('express')
const app = express()

app.get('/', function(req, resp){
    resp.send('hello world')
})

app.listen(3001, function(){
    console.log('server is running on port:3001')
})