/*
*url.parse(url上的方法解析req.url)第二个参数为布尔值相当于querystring.parse
*querystring.parse 解析url字符串
*formidable 接收文件的一个包
*keepExtensions 文件上传时自动带上扩展名
 */


const http = require('http');
const formidable = require('formidable');
const path = require('path')
const fs = require('fs');
const server = http.createServer((req,res)=>{
	//console.log('url::',req.url,'method=>',req.method)//url:: /?username=111&age=222 method=> GET
	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		//文件上传的地址
		form.uploadDir = "./upload";
		//文件上传时自动带上扩展名
		form.keepExtensions = true;
		//解析form
		form.parse(req,function(err,fields,files){
			console.log({fields:fields,files:files});
			console.log(__dirname+"/"+files.avatar.path);
			let oldPath = __dirname+"/"+files.avatar.path;
			//获取扩展名
			let extname = path.extname(oldPath);
			//拼接新文件路径
			let newPath = __dirname +"/upload/"+Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0')+extname;
			//更改上传的文件名称
			fs.rename(oldPath, newPath, (err)=>{
				if(err){
					res.setHeader('Content-type',"text/html;charset=utf-8");	
					res.end('err')
				}else{
					res.setHeader('Content-type',"text/html;charset=utf-8");	
					res.end('ok');
				}
			});
		});
	}
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})