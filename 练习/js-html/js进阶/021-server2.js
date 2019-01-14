/*

可以响应并返回文件



 */



var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	console.log('req.url:::',urlStr)
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico')
	}
	var filePath = './'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.statusCode = 404;
			res.end('not found');
		}
	});
	// res.end('hello');
});
/*
 局域网测试
server.listen(3000,'10.195.221.92',function(){
	console.log("Server running at http://10.195.221.92:3000")
})
*/
server.listen(3000,'127.0.0.1',function(){
	console.log("Server running at http://127.0.0.1:3000")
})