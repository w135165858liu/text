const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('test',()=>{
	console.log('run...')
})
myEmitter.emit('test')