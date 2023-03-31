const BankModel = require('../models/bank.models');

exports.create = async (req, res) => {
  try {

    
    const bank = new BankModel({ name :req.body.Banck });
    console.log(req.body);
    //await bank.save();
    res.status(201).send({
      message: 'bank created',
    });
  } 
  catch (error) {
    res.status(500).send({
      message: `error : ${error.message}`,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const banks = await BankModel.find();
    res.status(200).send(banks);
  } catch (error) {
    res.status(500).send({
      message: `error : ${error.message}`,
    });
  }
};
