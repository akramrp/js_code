var http = require('http');
var dt = require('./myDateTime');
var jsonData = "{'name':'akram', 'company':'phoneme solutions pvt ltd', 'mobile':'987654321'}"
http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Date: '+ dt.myDateTime());
    res.write('Jsondata: '+ jsonData);
    res.write(' ,req: '+ req.url);
    res.end();
}).listen(8080)