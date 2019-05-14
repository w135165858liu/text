const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public'))
app.use(express.static('public'))
app.all('/', (req, res,next) => {
	console.log('all response data...');
	next();
})
/*app.get('/users/:userId/books/:bookId', (req, res,next) => {
	console.log(req.params)
	res.send('get response data...');
})*/
app.get('',(req,res)=>{
	console.log(req.query)
	res.send('get response data...');
})
app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))