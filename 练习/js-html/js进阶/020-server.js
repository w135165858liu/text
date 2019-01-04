var http = require('http');
var fs = require('fs')


var server = http.createServer(function(req,res){
	var urlStr = req.url;
	if(urlStr == 'favicon.ico'){
		res.end('favicon.ico');
	}
	var filePath = './' + urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.end('not found');
		}
	})
});
server.listen(3000,'10.196.18.174',function(){
	console.log("Server is running at http://10.196.18.174:3000")
})