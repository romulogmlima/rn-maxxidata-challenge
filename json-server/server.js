// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const timestamp = Date.now()
    const date = new Date(timestamp)
    req.body.createdAt = date
    req.body.updatedAt = date
  }

  if (req.method === 'PUT') {
    const timestamp = Date.now()
    const date = new Date(timestamp)
    req.body.updatedAt = date
  }
  // Continue to JSON Server router
  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})