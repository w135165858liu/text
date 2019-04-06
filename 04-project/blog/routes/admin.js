const express = require('express');
const UserModel = require('../models/user.js');
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
//管理员管理中心
router.get("/",(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	});
});
//用户管理列表
router.get("/users",(req,res)=>{
	/*
	分页：
	约定：每一页显示 2 条
	第一页 跳过 0 条skip(0)
	第二页 跳过 2 条skip(2)
	第三页 跳过 4 条skip(4)
	第 page 页 跳过（page -1) *limit 条 skip (page -1)*limt
	 */
	let { page } = req.query;
	page = parseInt(page);
	if(isNaN(page)){
		page = 1;
	}
	if(page<=0){
		page = 1
	}
	
	//每页显示条数
	const limit = 2;
	UserModel.countDocuments({})
    .then(count => {
        //计算总页数
        const pages = Math.ceil(count / limit);
        if (page > pages) {
            page = pages
        }
		//生成頁碼
		const list = [];
		for(let i = 1;i<=pages;i++){
			list.push(i);
		}        
        const skip = (page - 1) * limit;

        UserModel.find({}, '-password -__v')
        .skip(skip)
        .limit(limit)
        .then(users => {
            res.render('admin/user_list', {
                userInfo: req.userInfo,
                users,
                page,
                list
            });
        })
    })
})
module.exports = router