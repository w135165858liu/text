const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
let myEmitter = new MyEmitter();
myEmitter.on('test',(data)=>{
	console.log(data)
}
myEmitter.emit('test',111)