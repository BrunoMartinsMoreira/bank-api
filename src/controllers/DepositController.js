class DepositController{}

module.exports = new DepositController(
  async function deposit(req, res){
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
);