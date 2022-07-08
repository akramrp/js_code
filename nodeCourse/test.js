// const express = require('express');
// const mongoose = require('mongoose');
// require('./models/config')
// const Product = require('./models/product')

// const app = express();
// const PORT = 3001

// // const productSchema = mongoose.Schema({
// //     name: String,
// //     qty: Number,
// //     color: String,
// //     price: Number,
// //     company: String,
// //     status: String
// // })
// // const Product = mongoose.model('product', productSchema)

// app.use(express.json())

// app.get('/', async (request, response) => {
//     try {
//         const data = await Product.find({})
//         response.status(202).json('Welcome!........')
//     }
//     catch(error){
//         response.status(404).json({"message":error.message})
//     }
// })

// app.get('/list', async (request, response) => {
//     try {
//         const data = await Product.find({})
//         // response.send(data)
//         response.status(202).json(data)
//     }
//     catch(error){
//         response.status(404).json({"message":error.message})
//     }
// })

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



var mongoClient = require('mongodb').mongoClient
var url = "mongodb://localhost:27017/mydb";

// create database
mongoClient.connect(url, (err, db) => {
    if (err) throw err
    console.log('database created!.')
    db.close()
})