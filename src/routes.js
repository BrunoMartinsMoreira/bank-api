const express = require('express');
const customerController = require('./controllers/CustumersController');
const depositController = require('./controllers/DepositController');
const verifyIfExistsAccountCPF = require('./middlewares/verifyIfExistsAccountCPF');

const routes = express.Router();

routes.post('/account', customerController.createAccount);
routes.get('/statement', verifyIfExistsAccountCPF, customerController.getStatement);
routes.post('/deposit', verifyIfExistsAccountCPF, depositController.deposit());

module.exports(routes)