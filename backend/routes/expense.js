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

router.patch('/expenses/:id', async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findById(id);

  const { amount, date, description } = req.body;
  expense.amount = amount;
  expense.date = date;
  expense.description = description;
  await expense.save();

  return res.status(200).json(expense);
});

router.delete('/expenses/:id', async (req, res) => {
  const { id } = req.params;
  await Expense.deleteOne({ _id: id });

  return res.status(200).json({});
})

module.exports = router;