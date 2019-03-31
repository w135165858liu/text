const mongooses = require("./models/user.js");
const mongoose = mongooses.mongoose;
const UserModel = mongooses.UserModel;
const names = ["Amy","Tom","Leo","Peter","Ricky","lucy","andy","mike"];
const majors = ["art","computer","sport","music"];
const getRandom = (min,max)=>{
	return Math.round(min+(max-min)*Math.random());
}
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
	//4.用模型操作数据(CRUD)增删改查
	UserModel.insertMany([
		{
		name:getName(),
		age:getRandom(10,150),
		major:getMajor()
		},
		{
			name:getName(),
			age:getRandom(10,150),
			major:getMajor()
		},
		{
			name:getName(),
			age:getRandom(10,150),
			major:getMajor()
		},
		{
			name:getName(),
			age:getRandom(10,150),
			major:getMajor()
		},
		{
			name:getName(),
			age:getRandom(10,150),
			major:getMajor()
		}
	],(err,docs)=>{
		if(err){
			console.log('insertMany err',err)
		}else{
			console.log(docs)
		}
	})

})













