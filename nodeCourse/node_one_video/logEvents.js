const { compareAsc, format } = require('date-fns');
const {v4: uuid } = require('uuid')

// console.log(format(new Date(), 'yyyy-MM-dd'))
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
// console.log(uuid())

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `\n${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'event_log.txt'), logItem);
    }catch(err){
        console.log(err);
    }
}
module.exports = logEvents;