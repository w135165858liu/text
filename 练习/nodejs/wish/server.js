/*
*url.parse(url上的方法解析req.url)第二个参数为布尔值相当于querystring.parse
*querystring.parse 解析url字符串
*
 */


const http = require('http');
const url = require('url');
const querystring = require('querystring');
const path = require('path');
const fs = require('fs');
const swig = require('swig')
const mime  =require('./mime.json');
const { getAll } = require('./WishModel.js')
const server = http.createServer((req,res)=>{
	// console.log('url::',req.url)
	let reqUrl = url.parse(req.url,true);
	// console.log(reqUrl);
	let pathname =reqUrl.pathname;
	if(pathname == '/' || pathname == '/index.html'){//获取首页
		getAll()
		.then(data=>{
			let template = swig.compileFile(__dirname+'/static/index.html');
			console.log(template)
			let html = template({
				data
			})
			res.setHeader('Content-type',"text/html;charset=utf-8");
			res.end(html);
		})
		.catch(err=>{
			console.log(err)
		})
	}
	else{//请求静态资源
		let filePath =path.normalize(__dirname+'/static/'+pathname);
		let extname = path.extname(filePath);

		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-type',"text/html;charset=utf-8");
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-type',mime[extname]+";charset=utf-8");
				res.end(data);
			}
		})
	}
})

server.listen(3000,'127.0.0.1',()=>{
	
	console.log('server is running at http://127.0.0.1:3000')

})