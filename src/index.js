const express = require('express');
const {v4} = require('uuid');

const app = express();
app.use(express.json());

const custumers = [];

app.post('/account', (req, res) => {
  const {name, cpf} = req.body;
  const costumerExists = costumers.some(custumer => custumer.cpf === cpf );

  if(costumerExists){
    return res.status(400).json({
      error: 'Customer already exists'
    })
  }

  const data = {
    id: v4(),
    name,
    cpf,
    statement: []
  }

  custumers.push(data);

  return res.status(201).send();

});

app.listen(3434)