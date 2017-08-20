const express = require('express');
const morgan = require('morgan');
const path = require('path');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('express-cors')

mongoose.connect(`mongodb://localhost:27017/agiledb`, {
    useMongoClient: true,
  });

  const app = express();

// CORS issue
app.use(cors({
    allowedOrigins: [
        'localhost:3000', 'http://localhost:3000'
    ]
}));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/products', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  res.json([
      {name: 'product #1', price: 200, color: 'red'},
      {name: 'product #2', price: 400, color: 'orange'},
      {name: 'product #3', price: 200, color: 'green'},
  ])
});

module.exports = app;