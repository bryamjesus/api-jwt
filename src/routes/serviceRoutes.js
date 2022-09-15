const express = require('express');
const router = express.Router();


const controlador = require('../controllers/serviceController');

router.get('/', (require, response) => {
  const lista = controlador.listServices();
  response.json(lista)
})

router.get('/:id', (require, response) => {
  const { id } = require.params;
  const service = controlador.searchId(id);
  response.json(service)
})

router.put('/:id', (require, response) => {
  const { id } = require.params;
  const { estado } = require.body
  const service = controlador.editEstate(id, estado);
  response.json(service)
})

module.exports = router;