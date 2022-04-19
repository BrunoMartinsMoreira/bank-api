const express = require('express');
const customerController = require('./controllers/CustumersController');

const routes = express.Router();

routes.post('/account', customerController.createAccount);
routes.get('/statement', customerController.getStatement);

module.exports(routes)