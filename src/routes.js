const express = require('express');
const customerController = require('./controllers/CustumersController');
const accountController = require('./controllers/AccountController');
const verifyIfExistsAccountCPF = require('./middlewares/verifyIfExistsAccountCPF');

const routes = express.Router();

routes.post('/account', customerController.createAccount);
routes.get('/statement', verifyIfExistsAccountCPF, customerController.getStatement);
routes.post('/deposit', verifyIfExistsAccountCPF, accountController.deposit);
routes.post('/witdraw', verifyIfExistsAccountCPF, accountController.withraw);
routes.post('/statement/date', verifyIfExistsAccountCPF, accountController.getStatementByDate);

module.exports(routes)