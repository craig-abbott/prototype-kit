import express from 'express'
import routes from '../routes/pages.mjs'
import nunjucks from './nunjucks/setup.mjs'
import minifyHTML from './middleware/minify.mjs'
import locals from './middleware/locals.mjs'
import bodyParser from 'body-parser'
import sessions from 'express-session'
import cookieParser from 'cookie-parser'
import errorhandler from 'errorhandler'
import dotenv from 'dotenv'
import useHttpsInProd from './https/use-in-prod.mjs'

// Use .env
dotenv.config()

// Create Express App
const app = express()
useHttpsInProd(app)

// Express Middleware
// -- Static routes
app.use(express.static('dist'))
// -- Body Parser
app.use(bodyParser.urlencoded({ extended: true, strict: true }))
// -- Cookies
app.use(cookieParser())
// -- Sessions
app.use(sessions({
  secret: 'something',
  saveUninitialized: true,
  cookie: { maxAge: (1000 * 60 * 60 * 24) },
  resave: false
}))

// Setup Nunjucks
nunjucks.setup(app)

// Error Handler
if (process.env.NODE_ENV !== 'production') {
  app.use(errorhandler())
}

// Middlewares
app.use(minifyHTML)
app.use(locals.set)

// Use Distribution folder as static
app.use(express.static('dist'))

// Use router
app.use(routes)

// Export app
export default app
