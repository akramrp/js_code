import mongoose  from "mongoose";
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
    let data = await  product.updateOne(
        { name: "oppo a83" },
        { $set: { name:'OPPO A83', price: 12500 } }
    )
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
    let data = await Product.find({})
    console.log(data);
}
findInDB();