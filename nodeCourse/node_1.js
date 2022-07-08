var http = require('http');
// var url = require('url');
var dt = require('./models/myDateTime');
var jsonData = "{'name':'akram', 'company':'phoneme solutions pvt ltd', 'mobile':'987654321'}"

http.createServer((req, res) => {
    var data = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type':'text/html'}); // use for showing html on browser
    res.write("<h2>Date: "+ dt.myDateTime()+"");
    res.write("\n<h1>Jsondata: "+ jsonData+"</h1>");
    // res.write(`host: ${data.host}, pahname: ${data.pathname}, search: ${data.search} \n`);
    res.write("\nsample: Thia is simple text");
    res.end();
}).listen(3001)