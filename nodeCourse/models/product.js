// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    qty: Number,
    color: String,
    price: Number,
    company: String,
    status: String
});

module.exports = mongoose.model('product', productSchema);