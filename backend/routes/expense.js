const express = require('express');

const router = express.Router();
const Expense = require('../models/expense');

router.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  return res.status(200).json(expenses);
});

router.post('/expenses', async (req, res) => {
  const { amount, date, description } = req.body;
  const expense = new Expense({ amount,date, description });
  await expense.save();

  return res.status(200).json(expense);
});

router.delete('/expenses', async (req, res) => {
  const { id } = req.body;
  await Expense.deleteOne({ _id: id });

  return res.status(200).json({});
})

module.exports = router;