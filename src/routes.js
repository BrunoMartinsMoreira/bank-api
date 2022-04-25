const express = require('express');
const customerController = require('./controllers/CustumersController');
const verifyIfExistsAccountCPF = require('./middlewares/verifyIfExistsAccountCPF');

const routes = express.Router();

routes.post('/account', customerController.createAccount);
routes.get('/statement', verifyIfExistsAccountCPF, customerController.getStatement);

module.exports(routes)