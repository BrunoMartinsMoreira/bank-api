const custumers = [];

 class CustumerController {
  async createAccount(req, res){
    const {name, cpf} = req.body;
    const costumerExists = await custumers.some(custumer => custumer.cpf === cpf );

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

  await custumers.push(data);

  return res.status(201).send();
  }

  async getStatement(req, res){
    const cpf = req.headers;

    const {custumer} = req;

    return res.json({
      statement: custumer.statement
    })
  }
}

module.exports = new CustumerController();