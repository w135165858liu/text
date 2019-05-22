const mongoose = require("mongoose");

//构建数据用
const getRandom = (min,max)=>{
	return Math.round(min+(max-min)*Math.random());
}
const names = ["Amy","Tom","Leo","Peter","Ricky","lucy","andy","mike"];
const majors = ["art","computer","sport","music"];
const getName = ()=>names[getRandom(0,names.length-1)]
const getMajor = ()=>majors[getRandom(0,majors.length-1)]
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
/*	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})*/
/*	UserModel.find({age:{$gt:50}},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})*/
/*	UserModel.find({age:{$gt:100}},"name age -_id",{skip:1},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})*/
/*	UserModel.find({age:{$gt:100}},null,{skip:1},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})*/
/*	UserModel.find({age:{$gt:100}},null,{limit:1},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})*/
/*	let result = UserModel.find({age:{$gt:100}},null,{sort:{age:1}},(err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
	})
	console.log(result);*/

/*	UserModel.findById('5c9c82c816d5bb186ccb9176',"name -_id",(err,docs)=>{
		if(err){
			console.log('findById err',err);
		}else{
			console.log(docs);
		}
	})*/
	UserModel.findOne({age:{$gt:100}},(err,doc)=>{
		if(err){
			console.log('findById err',err);
		}else{
			console.log(doc);
		}
	})















})













