var http = require('http');


var server = http.createServer(function(req,res){
	console.log(req.url);
	res.end('hello');
});
server.listen(3000,'127.0.0.1',function(){
	console.log("Server running at http://127.0.0.1:3000")
})