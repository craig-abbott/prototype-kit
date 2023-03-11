import express from 'express'
import fs from 'fs-jetpack'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/start.njk')
})

router.get('/dashboards', (req, res) => {
  res.render('pages/dashboards.njk')
})

router.get('*', (req, res, next) => {
  const filename = req.url.replace('/', '')
  const file = fs.find('src/app/ui/pages', { matching: `${filename}.njk` })[0]
  if (file) {
    res.render(file)
  } else {
    next()
  }
})

router.get('*', (req, res) => {
  res.status(404)
  res.render('layouts/404/template.njk')
})

export default router
