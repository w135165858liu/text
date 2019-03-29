const mongooses = require("./models/blog.js");
const mongoose = mongooses.mongoose;
const BlogModel = mongooses.BlogModel;
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
	BlogModel.insertMany({
		title:"title1",
		content:"content1",
		author:"5c9dd3ebcac8901cc0f65039"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err',err)
		}else{
			console.log(docs)
		}
	})

})













