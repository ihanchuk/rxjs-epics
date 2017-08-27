const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('express-cors');
const product = require('./db/models/product-model');

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

app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/products', (req, res) => {
    product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json({
                err: err
            })
        })
});

app.post('/products', (req, res) =>{
    res.json({
        result: "ok"
    })
});

module.exports = app;