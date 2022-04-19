const express = require('express');
const {v4} = require('uuid');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3434);