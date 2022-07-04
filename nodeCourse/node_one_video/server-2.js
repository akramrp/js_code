const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvents');
const events = require('events');

const myEmitter = new events.EventEmitter();
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
})
server.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})