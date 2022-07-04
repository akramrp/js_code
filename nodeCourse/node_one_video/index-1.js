const logEvents = require('./logEvents');
// const events = require('events');
const EventEmitter = require('events');

// initilize object
// const em = new events.EventEmitter();
const em = new EventEmitter();

//add listener for the log event
let msg = "this is testing log"
em.on('log', (msg) => logEvents(msg));
setTimeout(() => {
    em.emit('log', 'Log event emitted!');
}, 2000)