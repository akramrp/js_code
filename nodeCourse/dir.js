//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

/*
// fs.readFile('./files/readme.txt','utf8' , (err, data) => {
fs.readFile(path.join(__dirname, 'files', 'readme.txt'), 'utf8' , (err, data) => {
    if (err) throw error;
    // console.log(data.toString());
    console.log(data);
})
console.log(path.join(__dirname, 'files', 'readme.txt'));


// appendfile
fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\nhello nice to meet you", (err) =>{
    if (err) throw error;
    console.log('file append  complete');

    // rename
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
        if (err) throw error;
        console.log('rename  complete');
    })
})

// delete
fs.unlink(path.join(__dirname, "files", 'readme-1.txt' ), (err) => {
    if (err) throw err;
    console.log('delete complete')
})

*/


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8")
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n 2. Nice to meet you');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n 3. This is third line');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const comData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(comData);
    }
    catch (err){
        console.error(err);
    }
}
fileOps();



const fs = require('fs');

if(! fs.existsSync('./new') ){
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('new die created!');
    })
}

if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('new dir deleted!');
    });
}