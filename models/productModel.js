const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({

    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: { type: Number, required: true },
        count: { type: Number, required: true }
    },
    created: {
        type: Date,
        default: () => Date.now()
    },

    modified: {
        type: Date,
        default: () => Date.now()
    },

});

productSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
