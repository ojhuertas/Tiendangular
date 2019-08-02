const mongoose = require('mongoose');
const URL = 'mongodb://localhost/tienda';
mongoose.connect(URL,{ useNewUrlParser: true })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))

module.exports = mongoose;
