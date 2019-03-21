const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
myEmitter.on('newLitener',(eventName,cb)=>{
	console.log('newLitener');
	console.log(eventName);
	cb();
})
