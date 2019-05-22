const {Readable} = require('stream');
class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){//会推送数据到读取列表
		this.index++;
		if(this.index>5){
			this.push(null);
		}else{
			let str = this.index +'';
			this.push(str)
		}
	}
}
const reader = new MyReader();
let body = '';

reader.on('data',(chunk)=>{
	console.log(chunk.toString())
	body += chunk;
})
reader.on('end',()=>{
	console.log(body)
	console.log('end...')
})