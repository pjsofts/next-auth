const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const app = express()
app.use(cors())
app.use(cookieParser());
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    res.json({"token": "thisistoken"})
})

app.get('/me', (req, res) => {
    console.log(req.cookies);
    res.json({name: "ali", lastname:"alavi3"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})