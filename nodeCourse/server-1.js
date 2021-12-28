//console.log('hello azeem');
//console.log(global);

const os = require('os');
const path = require('path');
// console.log(Object.getOwnPropertyNames(os)) // get all method

// console.log(` hostname: ${os.hostname()}
// homedir: ${os.homedir()}
// type: ${os.type()}
// version: ${os.version()}
// arch: ${os.arch()}
// cpus: ${os.cpus()}
// freemem: ${os.freemem()} bytes
// platform: ${os.platform()}
// uptime: ${os.uptime()}
// totalmem: ${os.totalmem()} bytes
// tmpdir: ${os.tmpdir()} `);

// console.log(__dirname);     //D:\gitCode\js_code\nodeCourse
// console.log(__filename);    //D:\gitCode\js_code\nodeCourse\server.js

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))


// custom module
// const math = require('./math')
// console.log(math.add(7, 4))

const {add, sub, mul, div} = require('./math')
console.log(add(7, 4))
console.log(sub(7, 4))
console.log(mul(7, 4))
console.log(div(7, 4))