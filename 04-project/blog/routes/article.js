const express = require('express');
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
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
//現實文章列表
router.get("/",(req,res)=>{
  	const options = {
    	page:req.query.page,
    	model:ArticleModel,
    	query:{},
    	projection:'-__v',
    	sort:{_id:-1}
    }
    pagination(options)
    .then(data=>{
    	res.render('admin/article_list',{
    		userInfo:req.userInfo,
    		articles:data.docs,
    		page:data.page,
    		list:data.list,
    		pages:data.pages,
    		url:'/article'
    	})
    })
});
//显示添加文章
router.get("/add",(req,res)=>{
	CategoryModel.find({},'name')
	.sort({order:1})
	.then(categories=>{
		res.render('admin/article_add',{
			userInfo:req.userInfo,
			categories
		});		
	})
});
//处理添加文章页面
router.post("/add",(req,res)=>{
	const { category,title,intro,content } = req.body;
	ArticleModel.insertMany({
		category,
		title,
		intro,
		content,
		user:req.userInfo._id
	})
	.then(articles=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'添加文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:"添加文章失败，操作数据库失败，稍后重试"
		})
	})
});
//显示编辑页面
/*router.get('/edit/:id',(req,res)=>{
	const { id } = req.params
	CategoryModel.findById(id)
	.then(articles=>{
		res.render('admin/category_add_edit',{
			userInfo:req.userInfo,
			articles
		})
	})
})
//处理编辑
router.post('/edit',(req,res)=>{
	const { id,name,order } = req.body;
	CategoryModel.findById(id)
	.then(category=>{
		if(category.name == name&&category.order==order){//没有更改
			res.render('admin/error',{
				userInfo:req.userInfo,
				message:"请修改后再提交"
			})
		}else{
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(newCategory=>{
				if(newCategory){
					res.render('admin/error',{
						userInfo:req.userInfo,
						message:'修改文章失败，文章已存在'
					})
				}else{
					CategoryModel.updateOne({_id:id},{name,order})
					.then(result=>{
						res.render('admin/success',{
							userInfo:req.userInfo,
							message:'修改文章成功',
							url:'/category'
						})
					})
					.catch(err=>{
						throw err;
					})
				}
			})
			.catch(err=>{
				throw err;
			})
		}
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'修改文章失败,请稍后再试'
		})
	})
})
//删除
router.get('/delete/:id',(req,res)=>{
	const { id } = req.params
	CategoryModel.deleteOne({_id:id})
	.then(result=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'删除文章成功',
			url:'/category'
		})
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'删除文章失败,请稍后再试'
		})
	})
})*/
module.exports = router 