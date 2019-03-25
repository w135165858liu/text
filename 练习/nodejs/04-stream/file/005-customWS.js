const {Writable} = require('stream');
//const ws = new Writable();
//ws.write('hello')//The _write() method is not implemented
class MyWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		callback && callback();
	}
}
const writer = new MyWriter();
writer.write('hello','utf-8',()=>{
	console.log('Hello.....')
})