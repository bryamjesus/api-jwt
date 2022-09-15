const jwt = require('jsonwebtoken')
const { SECRET_KEY, EXPIRE_TOKEN } = require('../config')


const login = ({ usuario, clave }) => {
  const payload = {
    userId: 1832,
    user: usuario,
    email: 'usuario@usuario.com',
    rol: 'admin'
  }
  const token = jwt.sign(
    payload, SECRET_KEY, { expiresIn: EXPIRE_TOKEN }
  );
  return token
}

module.exports = { login }