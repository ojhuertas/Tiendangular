const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Configuración
app.set('port', process.env.PORT || 3000);

//Procesos
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Rutas
app.use('/api/productos',require('./routes/productos.routes'));
app.use('/api/usuarios',require('./routes/usuarios.routes'));

//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto '+app.get('port'));
});
