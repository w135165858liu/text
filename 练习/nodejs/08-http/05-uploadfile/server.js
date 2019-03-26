/*
*url.parse(url上的方法解析req.url)第二个参数为布尔值相当于querystring.parse
*querystring.parse 解析url字符串
*formidable 接收文件的一个包
*keepExtensions 文件上传时自动带上扩展名
 */


const http = require('http');
const formidable = require('formidable');
const server = http.createServer((req,res)=>{
	console.log('url::',req.url,'method=>',req.method)//url:: /?username=111&age=222 method=> GET
	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
		form.keepExtensions = true;
		form.parse(req,function(err,fields,files){
			console.log({fields:fields,files:files});
			res.setHeader('Content-type',"text/html;charset=utf-8");	
			res.end('kuazhu');
		});
	}
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})