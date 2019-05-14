const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public'))
//设置虚拟路径
app.use('/static',express.static('public'))
app.get('/', (req, res) => res.send('Hello World! 你好 夸猪'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))