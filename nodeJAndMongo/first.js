// npm first.js


var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demoFile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.write(data);
        return res.end()
    })
}).listen(8080);

// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello World! with first program,,,,,,');
// }).listen(8080);

/* 
// ES6 module code
import { createServer } from 'http';
createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World! with first program,,,,,,');
}).listen(8080);
*/

