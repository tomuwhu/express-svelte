const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/', express.static(__dirname +'/../client/build'))

app.post('/server', (req, res) => {
  rnd = Math.random()
  res.json({rnd, c: Number(req.body.c) + rnd})
})

app.get('/server', (req, res) => {
  res.json({x: 3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
