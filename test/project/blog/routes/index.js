const express = require('express');
const CategoryModel = require('../models/category.js');
const router = express.Router();
const ArticleModel = require('../models/article.js');

async function getCommonData(req){
	const categoriesPromise = CategoryModel.find({},'name').sort({order:1});
	const pageArticlesPromise = ArticleModel.getPaginationArticles(req)
	const categories = await categoriesPromise
	const pageArticles = await pageArticlesPromise
	
	return {
		categories,
		pageArticles
	}
}


//显示首页
router.get("/",(req,res)=>{
	getCommonData(req)
	.then(data=>{
		const {categories,pageArticles} = data;
		console.log(pageArticles)
		res.render('main/index',{
			userInfo:req.userInfo,
			categories,
			//首页文章分页数据
			articles:pageArticles.docs,
    		page:pageArticles.page,
    		list:pageArticles.list,
    		pages:pageArticles.pages
		})
	})
});
//处理文章数据的ajax请求
router.get('articles'(req,res)=>{
	res.json({
		status:0
	})
})



module.exports = router