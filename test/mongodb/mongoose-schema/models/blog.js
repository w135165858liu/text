	
	const mongoose = require("mongoose");
	//1.定义Schema
	
	const BlogSchema = new mongoose.Schema({
		title:{
			type:String,
			default:''
		},
		content:{
			type:String,
			default:''
		},
		author:{
			type:mongoose.Schema.Types.ObjectId
		}
	})
	//2.生成模型Model
	//2.1mongoose.model第一个参数是指定集合的名称，mongoose会自动变为复数
	//2.2mongoose.model第二个参数指定Schema
	const BlogModel = mongoose.model('blog',BlogSchema);
	//3.导出

	module.exports = {BlogModel,mongoose};