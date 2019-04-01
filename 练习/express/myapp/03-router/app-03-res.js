const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public'))
app.use(express.static('public'))
app.all('/', (req, res,next) => {
	console.log('all response data...');
	next();
})
app.get('/',(req,res)=>{
	// res.send('<h1>get response data...</h1>');
	// res.send({name:"Tom"})
	//res.send('get response data...');
	// res.end('get response data...');
	// res.end({name:"Tom"})
	// res.end('<h1>get response data...</h1>')
	// res.json('get response data...');
	// res.json({name:"Tom"})
	res.json('<h1>get response data...</h1>')
})
app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))