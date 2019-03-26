/*
*url.parse(url上的方法解析req.url)第二个参数为布尔值相当于querystring.parse
*querystring.parse 解析url字符串
*
 */


const http = require('http');
const url = require('url');
const querystring = require('querystring')
const fs = require('fs');
const server = http.createServer((req,res)=>{
	console.log('url::',req.url,'method=>',req.method)//url:: /?username=111&age=222 method=> GET
	//解析
	let body = '';
	req.on('data',(chunk)=>{
		body += chunk;
	})
	req.on('end',()=>{
		let obj = querystring.parse(body);
		console.log(obj);
	})
	res.setHeader('Content-type',"text/html;charset=utf-8");
		
	res.end('kuazhu');
})

server.listen(3000,'127.0.0.1',()=>{
	
	console.log('server is running at http://127.0.0.1:3000')

})