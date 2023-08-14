const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db.db')

app.use(express.json())
app.use(cors())
app.use('/', express.static(__dirname +'/../client/build'))

app.post('/server', (req, res) => {
  rnd = Math.random()
  res.json({rnd, c: Number(req.body.c) + rnd})
})

app.get('/server/:un/:pw', (req, res) => {
    db.all(
      "SELECT * FROM user WHERE un = ? and pw = ?",
      [req.params.un, req.params.pw],
      (err, data) => res.json({data, err}))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
