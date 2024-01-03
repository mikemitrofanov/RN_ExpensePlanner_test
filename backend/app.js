const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = require('./config/db');
const expenseRoutes = require('./routes/expense');

const app = express();
mongoConnect();

const port = process.env.NODE_LOCAL_PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Test'));

app.use('/', expenseRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));