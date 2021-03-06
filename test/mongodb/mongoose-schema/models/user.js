	
	const mongoose = require("mongoose");
	//1.定义Schema
	
	const UserSchema = new mongoose.Schema({
		name:{
			type:String,
			required:[true,"用户名必须输入"],
			maxlength:[5,"最多5位数字"]
		},
		age:{
			type:Number,
			default:0
		},
		major:{
			type:String,
			enum:["art","computer","sport","music"],
			default:"art"
		},
		hobby:{
			type:String
		},
		lock:{
			type:Boolean,
			default:false
		},
		createAt:{
			type:Date,
			default:Date.now
		},
		friends:{
			type:Array
		}
	})
	//2.生成模型Model
	//2.1mongoose.model第一个参数是指定集合的名称，mongoose会自动变为复数
	//2.2mongoose.model第二个参数指定Schema
	const UserModel = mongoose.model('user',UserSchema);
	//3.导出

	module.exports = {UserModel,mongoose};