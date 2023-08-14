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
  un = req.body.un
  pw = req.body.pw
  db.all(
    "SELECT * FROM user WHERE un = ? and pw = ?",
    [un, pw],
    (err, data) => data[0] && res.json({name: data[0].name})
  )
})

app.get('/server', (req, res) => {
  res.json({x: 'cica'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
