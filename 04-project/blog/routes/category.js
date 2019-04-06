const express = require('express');
const CategoryModel = require('../models/category.js');
const router = express.Router();
//显示后台首页
//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请用管理员账号登陆</h1>')
	}
})
//現實分類列表
router.get("/",(req,res)=>{
	res.render('admin/category_list',{
		userInfo:req.userInfo
	});
});
router.get("/add",(req,res)=>{
	res.render('admin/category_add',{
		userInfo:req.userInfo
	});
});
//处理添加分类页面
router.post("/add",(req,res)=>{
	const { name,order } = req.body;
	CategoryModel.insertMany({name,order})
	.then(categories=>{
		res.render('admin/category_add',{
			userInfo:req.userInfo
		});
	})
	// .catch(err=>{

	// })
	
});
//
module.exports = router 