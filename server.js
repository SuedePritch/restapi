const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send(`
    <a href="/user">User</a>
    <h1>James' REST API</h1>
    `)
})
app.get('/user', (req, res) => {
    res.send(`
    <a href="/">Back</a>
    <h2>Welcome James Pritchard</h2>
    <p>age: 33</p>
    <p>height: 183cm</p>
    `)
  })

  app.post('/user', (req, res) => {
    res.send('Got a POST request at /user')
  })

  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

const port = process.env.PORT || 3000


app.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})