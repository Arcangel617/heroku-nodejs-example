const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send({message: 'Hello World!'})
})

app.get('/:name', (req, res) => {
  res.send({message: 'Hello ' + req.params.name + '!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

