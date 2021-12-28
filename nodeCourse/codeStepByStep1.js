/*
// 2. asysnc process
console.log('start execution..')
setTimeout( ()=> {
    console.log('logic or code execution..')
}, 1000)
console.log('end execution..')

// output:
// start execution..
// end execution..
// start execution..


// draback
a = 10, b = 0;
console.log('start execution..')
setTimeout( ()=> {
    b = 20;
}, 1000)
console.log(a+b)

// output:
// start execution..
// 10
// logic or code execution..

let waitingData = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        b = 30
        resolve(b);
    }, 1000)
})
waitingData.then((data)=>{
    console.log(a+data);
})
// now a+b is 40;

*/


const colors = require("colors");
console.log('hello, i am akram here'.green);
console.log(colors.blue('hello, i am akram here'));
console.log(colors.red('hello, i am akram here'));
console.log(colors.green('hello, i am akram here'));
console.log(colors.bgCyan('hello, i am akram here'));
console.log(colors.bgMagenta('hello, i am akram here'));