const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
let args = ['hello','kuazhu']
//没有event参数

myEmitter.on('test',(arg1,arg2)=>{
	console.log('run...',arg1+arg2)
})
myEmitter.addListener('test',(arg1,arg2)=>{
	console.log('run...',arg1+arg2)
})
console.log(myEmitter.on === myEmitter.addListener)
myEmitter.emit('test',...args)