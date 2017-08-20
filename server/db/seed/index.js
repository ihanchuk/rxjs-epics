const mongoose = require('mongoose');
const schema = mongoose.Schema;
const product = require ('../models/product-model.js');
const fakeData = require('./fake-data');

mongoose.connect(`mongodb://localhost:27017/agiledb`, {
    useMongoClient: true,
  });

  product.insertMany(fakeData, function(error, docs) {
      if (error) throw error;
      console.log(`***********DB SEED************`);
      console.log(`Seeded with ${docs.length} products`);
      console.log(`Press <AnyKey> in geometric center of keyboard, near <Ins> and <Alt> keys`);
  });

