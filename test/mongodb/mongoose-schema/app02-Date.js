const mongooses = require("./models/user.js");
const mongoose = mongooses.mongoose;
const UserModel = mongooses.UserModel;
const moment = require('moment');
//1.连接数据库服务
mongoose.connect('mongodb://localhost/kuazhu',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',()=>{
	console.log('connection error');
	throw err;
});
db.once('open',()=>{
	
	console.log('connection successful');
	//4.用模型操作数据(CRUD)增删改查
	UserModel.findById("5c9dd3ebcac8901cc0f65039",(err,user)=>{
		if(err){
			console.log('findById err',err)
		}else{
			// console.log(user.createAt)
			//1.用Date类
			// const date = new Date(user.createAt);
			// console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
			//2.用moment
			console.log(moment(user.createAt).format('YYYY MM DD,HH:mm:ss'))

		}
	})

})













