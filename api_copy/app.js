const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
//const Message = require('../api/models/msg');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//const routes = require('../api/routes/msg');
//routes(app); // registrando rotas na api
app.listen(port);

console.log('Message RESTful API server started on: ' + port);

module.exports = app
