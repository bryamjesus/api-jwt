const express = require('express');
const serviceRutes = require('./routes/serviceRoutes.js')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/services', serviceRutes);

app.listen(PORT, () => console.log(`🚀 Servidor iniciado en el puerto ${PORT}`))