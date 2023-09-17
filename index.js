const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const port = 3000;

const user = require('./routes/user.route');
const product = require('./routes/product.route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => { console.log('Connection with database established.')},
    (err) => { console.log('Failed to connect to MongoDB!', err)}
  );  

app.use('/api/users', user);
// app.use('/api/products', product.router);

app.listen(port, () => {
  console.log('Listening on port 3000');
});