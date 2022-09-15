const express = require('express');
const serviceRutes = require('./routes/serviceRoutes.js')
const loginRoute = require('./routes/loginRoutes')
const auth = require('./middlewares/authMiddlewares')

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/login', loginRoute);
app.use(auth)

app.use('/services', serviceRutes);

app.listen(PORT, () => console.log(`🚀 Servidor iniciado en el puerto ${PORT}`))