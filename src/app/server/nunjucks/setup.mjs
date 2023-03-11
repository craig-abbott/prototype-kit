import nunjucks from 'nunjucks'
import slugify from 'slugify'
import path from 'path'
import parseFrontMatter from './parse-front-matter.mjs'

function setup (app) {
  // Set view engine
  app.set('view engine', 'njk')

  // Setup paths
  const paths = [
    path.resolve('.'),
    path.resolve('src', 'app', 'ui')
  ]

  // Setup Nunjucks env
  const env = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: process.env.NODE_ENV === 'dev',
    watch: true,
    lstripBlocks: true,
    trimBlocks: true
  })

  // Add filters
  env.addFilter('slugify', text => {
    return slugify(text)
  })

  // Parse front-matter
  parseFrontMatter(env)

  return app
}

export default { setup }
