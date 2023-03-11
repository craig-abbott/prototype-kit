import colours from 'colors'
import http from 'http'
import app from './app.mjs'

function serverStart () {
  const server = http.createServer(app)
  const port = process.env.PORT || 3001
  server.listen(port)
  console.log(colours.green(`Server started on http://localhost:${port}`))
  return server
}

export default serverStart()
