const mongoose = require("mongoose");
//1.连接数据库服务
mongoose.connect('mongodb://localhost/kuazhu',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',()=>{
	console.log('connection error');
	throw err;
});
db.once('open',()=>{
	
	console.log('connection successful');
	//2.定义Schema
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//3.生成模型Model
	//3.1mongoose.model第一个参数是指定集合的名称，mongoose会自动变为复数
	//3.2mongoose.model第二个参数指定Schema
	const UserModel = mongoose.model('user',UserSchema);

	//4.用模型操作数据(CRUD)增删改查
	//4.1插入数据
/*	const user = new UserModel({name:"Amy",age:18,major:"commputer"});
	user.save((err,doc)=>{
		if(err){
			console.log('save user error::',err)
		}else{
			console.log(doc)
		}
	})*/
	//4.2查找
/*	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user error::',err)
		}else{
			console.log(docs)
		}
	})*/
	//4.3更新
	/*UserModel.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('update user error::',err)
		}else{
			console.log(result)
		}
	})*/
	//4.4删除
/*			
	UserModel.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log('deleteOnde userr error::',err)
		}else{
			console.log('deleteOne success',result)
		}
	})*/












})













