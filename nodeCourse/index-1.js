const logEvents = require('./logEvents');
const events = require('events');

// initilize object
const em = new events.EventEmitter();

//add listener for the log event
em.on('log', (msg) => logEvents(msg));
setTimeout(() => {
    em.emit('log', 'Log event emitted!');
}, 2000)