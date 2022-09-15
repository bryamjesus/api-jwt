const jwt = require('jsonwebtoken')
const config = require('../config')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  console.log(!token)
  if (!token) {
    console.log(`Token null`)
    return res.status(403).send('Token requerido')
  }

  jwt.verify(token, config.SECRET_KEY, (err, payload) => {
    if (err) return res.status(401).send('Token invalido')
    next()
  })
}

module.exports = verifyToken