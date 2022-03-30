const express = require('express')
const app = express();

app.get('/', function(req, res) {
    const buf = Buffer.from('hello is this buffer')
    console.log(buf, 'buffer()')
    res.end('home')
})

app.listen(3000, ()=> console.log('Server started'))