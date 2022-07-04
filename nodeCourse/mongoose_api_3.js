const express = require('express');
require('./models/config');
const Product = require("./models/product.js")
const multer = require('multer')

const app = express();
const PORT = 3001;

app.use(express.json())

app.post('/create', async (request, response) => {
    let data = new Product(request.body);
    let result = await data.save();
    response.send(result);
    // console.log(result);
})

app.get("/list", async (request, response) => {
    try{
        let data = await Product.find();
        //response.send(data);
        response.status(200).json(data);
    }
    catch(error){
        response.status(404).json({message:error.message});
    }
})

app.delete("/delete/:_id", async (request, response) => {
    console.log(request.params)
    let data = await Product.deleteOne(request.params);
    response.send(data);
})


app.put("/update/:_id",async (request, response) => {
    console.log(request.params)
    let data = await Product.updateOne(
        request.params,
        {$set: request.body}
    );
    response.send(data);
})

app.get("/search/:key", async (request, response) => {
    try{
        // let data = await Product.find({name:request.params.key}); // search for single field 
        let data = await Product.find({
            "$or":[
                {"name": {$regex:request.params.key}},
                {"company": {$regex:request.params.key}},
                {"color": {$regex:request.params.key}}
            ]
        });
        response.send(data);
    }
    catch(error){
        response.status(404).json({message:error.message});
    }
})


const upload = multer({
    storage:multer.diskStorage({
        destination: function (request, file, callback){
            callback(null, 'img')
        },
        filename: function(request, file, callback){
            callback(null, file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single('user_image');

// http://localhost:3001/upload
app.post('/upload', upload, (request, response) => {
    response.send('file upload.')
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  