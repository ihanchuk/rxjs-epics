const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Product = new Schema({
    meta: {
        img: {
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required: true
        },
        longDescription: {
            type: String,
            required: true
        },
        productName:{
            type: String,
            required: true
        }
    },
    price: {
        type: Number,
        min: 1,
        required: true
    },
    color: {
        type: String,
        enum: ['red', 'green', 'black', 'silver', 'gold']
    },
});

const ProductModel = mongoose.model('Product', Product);
module.exports = ProductModel;