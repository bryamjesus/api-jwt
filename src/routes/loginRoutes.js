const express = require('express');
const router = express.Router();

const controlador = require('../controllers/loginController');

router.post('/', (req, res) => {
  const token = controlador.login(req.body);
  res.json({token});
});

module.exports = router