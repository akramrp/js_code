// import mongoose  from "mongoose";
var mongoose = require("mongoose");
const DB_URL = 'mongodb+srv://root:rootpass@crudd.6fvby.mongodb.net/CRUDD?retryWrites=true&w=majority';
mongoose.connect(DB_URL);


const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

const productSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    color: String,
    price: Number,
    company: String,
    status: String
});

const userDB = async () => {
    const userModel = mongoose.model('users', userSchema);
    let dataObj = {name:"test-user", username:"test-user", email:"testuser@gmail.com", phone:9638527410}
    let data = new userModel(dataObj);
    let result = await data.save();
    // let result = await userModel.find({});
    console.log(result);
}
// userDB()

const saveInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let dataObj = {name:'iphone 8', qty:17, color:"black", price:38000, company:'apple', status:"delivered"}
    let data = new productModel(dataObj);
    let result = await data.save();
    // let result = await productModel.find();
    console.log(result);
}
// saveInDB()

const updateInDB =async  () => {
    const product = mongoose.model('products', productSchema);
    const oldData = { name: "oppo a83" }
    const newData = { $set: { name:'OPPO A83', price: 12500 } }
    let data = await  product.updateOne(oldData, newData)
    console.log(data)
}
// updateInDB()

const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'iphone 8'})
    console.log(data);
}
// deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    // let data = await Product.find({name:'iphone 8'})
    /*
        .sort({company: 1})  // company asc
        .sort({company: -1}) // company desc
    */
    let data = await Product.find({name:'moto g52'})
    //let data = await Product.find({}).sort({company:1}).limit(4)
    console.log(data);
}
findInDB();

/*
collection: orders
[
  { _id: 1, product_id: 154, status: 1 },
  { _id: 2, product_id: 153, status: 1 }
]
collection: products
[
  { _id: 154, name: 'Chocolate Heaven' },
  { _id: 155, name: 'Tasty Lemons' },
  { _id: 156, name: 'Vanilla Dreams' }
]

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});

result:
[
  { "_id": 1, "product_id": 154, "status": 1, "orderdetails": [
    { "_id": 154, "name": "Chocolate Heaven" } ]
  }
]
*/