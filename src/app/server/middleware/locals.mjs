function set (req, res, next) {
  if (req.session.data === undefined) req.session.data = {}
  res.locals.body = req.body
  res.locals.data = req.session.data
  res.locals.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
  next()
}

export default { set }
