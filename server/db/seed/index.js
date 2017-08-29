const mongoose = require('mongoose');
const schema = mongoose.Schema;
const product = require('../models/product-model.js');
const fakeData = require('./fake-data');

mongoose.connect(`mongodb://localhost:27017/agiledb`, {
    useMongoClient: true,
});

product.insertMany(fakeData, function (error, docs) {
    if (error) throw error;
    console.log("Seeded with \033[31m  ${docs.length} products \x1b[0m ");
    console.log("Press \x1b[36m <CTRL> +  \x1b[34m <AnyKey> \x1b[0m to continue");
});

