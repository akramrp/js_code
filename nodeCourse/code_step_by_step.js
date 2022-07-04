// import module
const os = require('os');
const fs = require('fs');
const path = require('path');
const colors = require("colors");

// variable declaration
const dirPath = path.join(__dirname, 'files');

// color log
console.log('hello, i am akram here'.green);
console.log(colors.red('hello, i am akram here'));
console.log(colors.green('hello, i am akram here'));
console.log(colors.bgCyan('hello, i am akram here'));
console.log(colors.bgMagenta('hello, i am akram here'));

console.log(`RAM ==> freemem:  ${os.freemem()} bytes, ${os.freemem()/(1024*1024*1024)} GB`)
console.log(`RAM ==> totalmem: ${os.totalmem()} bytes, ${os.totalmem()/(1024*1024*1024)} GB`)
console.log(`userInfo ==> ${Object.entries(os.userInfo())}`)


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
const {add, sub, mul, div} = require('./models/math')
console.log(add(7, 4))
console.log(sub(7, 4))
console.log(mul(7, 4))
console.log(div(7, 4))


// console.log(path.parse(__filename))
// {
//   root: 'D:\\',
//   dir: 'D:\\gitCode\\js_code\\nodeCourse',
//   base: 'test.js',
//   ext: '.js',
//   name: 'test'
// }


/*
// video 16 promise async 
let a=10, b=0;
console.log(a+b);

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30);
    }, 2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+data); // 40
})
*/

/*
// video 12
console.log(process.argv);
console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  
console.log(`Process Args: ${process.args}`);  
console.log(`Process ENV: ${process.env}`);  
console.log(`Current directory: ${process.cwd()}`);  
console.log(`Uptime: ${process.uptime()}`); 
*/

// video 13
console.log('dirPath: ', dirPath);

// // read all file from dir
// fs.readdir(dirPath, (err, item)=>{
//     // console.log(item); // retuen filename array
//     item.forEach((file)=>{
//         console.log(file);
//     })
// });

// video 14 all file operation
const filePath = `${dirPath}/data-file.txt`;
if(! fs.existsSync(filePath))
    fs.writeFileSync(filePath, "this is simple data file line -1");
else
    fs.appendFileSync(filePath, "\nthis is another line")
let data = fs.readFileSync(filePath, 'utf8');
console.log(`======= Reading file data ======= \n${data}`);

// let data = fs.readFileSync(`${dirPath}/data-file.txt`, 'utf8');
// console.log(`======= Reading file data ======= \n${data}`);

// fs.renameSync(filePath, `${dirPath}/data-file.txt`);
// fs.unlinkSync(`${dirPath}/data-file.txt`);