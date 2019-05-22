const fs = require('fs')
fs.writeFile('001.test.js','hello000hahaha',{flag:'a'},(err)=>{
	if(err){
		console.log('err')
	}
})