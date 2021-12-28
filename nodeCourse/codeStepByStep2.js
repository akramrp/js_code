const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

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

// video 13
//console.log(dirPath);

// for(let i=1; i<3; i++){
// const dirPath = path.join(__dirname, 'files');
//     fs.writeFileSync(dirPath+'/code'+i+'.txt', 'code file here');
// }

fs.readdir(dirPath, (err, item)=>{
    // console.log(item); // retuen filename array
    item.forEach((file)=>{
        console.log(file);
    })
});


// video 14
const filePath = `${dirPath}/data-file.txt`;
if(! fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'this is simple data file');
}
else{
    fs.appendFileSync(filePath, "\nthis is another line")
}
// let data = fs.readFileSync(filePath, 'utf8');
// console.log(`======= Reading file data ======= \n${data}`);

let data = fs.readFileSync(`${dirPath}/data-file.txt`, 'utf8');
console.log(`======= Reading file data ======= \n${data}`);

// fs.renameSync(filePath, `${dirPath}/data-file.txt`);
// fs.unlinkSync(filePath, `${dirPath}/data-file.txt`);

*/

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
    console.log(a+data);
})