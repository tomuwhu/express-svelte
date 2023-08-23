const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()

var app = express()
app.use(express.json())
app.use(cors())
app.use('/', express.static(__dirname + '/../client/build'))

app.get('/test', (req, res) => {
  res.send('test succesful')
})

const db = new sqlite3.Database('db.db')
app.post('/server', (req, res) => {
  db.all(
    "SELECT * FROM user WHERE un = ? and pw = ?",
    [req.body.un, req.body.pw],
    (err, data) => data[0] && res.json({ name: data[0].name })
  )
})

const port = 3000
app.listen(port, () => {
  console.log(`Szerver elindítva:\thttp://localhost:${port}`)
})
