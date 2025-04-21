const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect('mongodb://mongo:27017/devopsdb', { useNewUrlParser: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

app.get('/health', (req, res) => res.send('OK'));

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));