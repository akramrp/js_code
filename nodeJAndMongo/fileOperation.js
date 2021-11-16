var http = require('http');
var fs = require('fs');

fs.rename('demoFile2.html', 'rename2.txt' , (err) => {
    if (err) throw err;
    console.log('file rename!')
})


/*

fs.unlink('demoFile2 - Copy.html', (err) => {
    if (err) throw err;
    console.log('file deleted!')
})


fs.appendFile('demoFile2.html', 'hello node content', (err) => {
    if (err) throw err;
    console.log('Saved!')
})


http.createServer((req, res) => {
    fs.readFile('demoFile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type':'Text/Plain'})
        res.write(data);
        return res.end()
    })
}).listen(8080);

*/