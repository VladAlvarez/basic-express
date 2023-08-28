const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

let color = "red";
console.log('hello ' + color);
console.log(`${color} world`);

app.get('/greeting', (req,res) => {
    res.send('hello')
})

app.get('/about', (req,res) => {
    res.send('this is my first app')
})

app.post('/data', (req,res) => {
    const color = req.body.colorName
    const count = req.body.count
    res.send(`got it ${color} ${count}`)
})

app.listen(port, () => {
    console.log(`server is up, listening on port: ${port}`);
})