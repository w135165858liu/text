const {mongoose,UserModel} = require("./models/user.js");
// const mongoose = mongooses.mongoose;
// const UserModel = mongooses.UserModel;
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
	UserModel.insertMany({
		name:"abcdef",
		age:"18",
		major:"computer",
		hobby:"eat"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err',err)
		}else{
			console.log(docs)
		}
	})

})













