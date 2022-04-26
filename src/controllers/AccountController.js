class DepositController{

   deposit(req, res){
    const {description, amount} = req.body;

    const customer = req;

    const operation = {
      description,
      amount,
      created_at: new Date(),
      type: "credit"
    }

    customer.statement.push(operation);

    return res.status(201).send();
  }

  withraw(req, res){
    const {amount} = req.body;
    const {customer} = req;

    function getBalance(statement){
     const wallet = statement.reduce((acc, op) => {
        if(op.type === 'credit'){
          return acc + op.amount
        }else{
          return acc - op.amount
        }
      }, 0)
      return wallet;
    }

    const balance = getBalance(customer.statement)

    if(balance < amount){
      return res.status(400).json({
        error: 'Saldo insuficiente'
      })
    }

    const operation = {
      amount,
      created_at: new Date(),
      type: "debit"
    }

    customer.statement.push(operation);

    return res.status(201).send();

  }

  getStatementByDate(req, res){
    const {customer} = req;
    const {date} = req.query;

    const formatDate = new Date(date + "00:00");

    const statement = customer.statement.filter((statementItem)=>{
      statementItem.created_at.toDateString() === new Date(formatDate).toDateString()
    })

    if(statement){
      return res.json(statement)
    }
  }
}

module.exports = new DepositController();