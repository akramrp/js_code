var fs = require('fs');
const fsPromises = require('fs').promises;
var events = require('events');
var path = require('path')
const { compareAsc, format } = require('date-fns');
const {v4: uuid } = require('uuid')

var eventEmitter = new events.EventEmitter()
var pathdir = path.join(__dirname, 'node_one_video/logs')

// create a event handler
var myEventHandler = () => {
	var message = "login event is generated";
	const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `\n${dateTime}\t${uuid()}\t${message}`;
	try{
		if(!fs.existsSync(pathdir)){
			fsPromises.mkdir(pathdir)
		}
		fsPromises.appendFile(pathdir+'/event_log.txt', logItem)
		console.log('Event ==> event generated!');
	}
	catch(err){
		console.log("Error ==> ", err.message)
	}
}

// assign event handler to an event
eventEmitter.on('login', myEventHandler)

// fire the 'login' event
eventEmitter.emit('login')



// ========================== some file operation ==========================
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