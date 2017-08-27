const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('express-cors');
const ProductModel = require('./db/models/product-model');

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

app.post('/products', (req, res) => {
    let data = {
        meta: {
            img: req.body.productUrl,
            shortDescription: req.body.productShortDesc,
            longDescription: req.body.productLongDesc,
            productName: req.body.productName,
        },
        price: req.body.productPrice,
        color: req.body.productColor
    };
    let newProduct = new ProductModel(data);
    newProduct.save().then((res) => {
        res.json({
            message: 'Product saved to db',
            statusCode: 200
        });
    })
        .catch((err) => {
            res.json({
                message: 'Failed saving to DB',
                statusCode: 500
            });
        });

});

module.exports = app;