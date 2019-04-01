const express = require('express');
// const userRouter = require('./routers/user.js')
// const blogRouter = require('./routers/blog.js')
const app = express()
const port = 3000
// app.use(express.static('public'))
app.use(express.static('public'));
app.use('/user',require('./routers/user.js'))
app.use('/blog',require('./routers/blog.js'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))