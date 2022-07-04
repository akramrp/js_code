const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const app = express();
const PORT = 3001;

app.use(express.json());

// get: http://localhost:3001/
app.get('/', async (request, response) => {
    let db = await dbConnect();
    let data = await db.find().toArray();
    response.send(data);
})

// post: http://localhost:3001/
app.post('/', async (request, response) => {
    let db = await dbConnect();
    let data = await db.insertOne(request.body);
    response.send(data);
})

// put: http://localhost:3001/
// put: http://localhost:3001/lenovo m2 update
app.put('/:name', async (request, response) => {
    let db = await dbConnect();
    let data = await db.updateOne(
        // { item: "lenovo m2"},
        { item: request.params.name},
        { $set : request.body}
    )
    response.send(data);
})

// delete: http://localhost:3001/617267ae17a7e41c978738b1
app.delete('/:id', async (request, response) => {
    let db = await dbConnect();
    let data = await db.deleteOne({_id: new mongodb.ObjectId(request.params.id) })
    response.send(data);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  