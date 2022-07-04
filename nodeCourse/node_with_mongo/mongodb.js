const { MongoClient } = require('mongodb');
// import { MongoClient } from 'mongodb'

const URL = "mongodb://localhost:27017";
const DATABASE = "akramTestDB";
const COLLECTION = "collectionTest";

const client = new MongoClient(URL);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(DATABASE);
    return db.collection(COLLECTION);
}
module.exports = dbConnect;

/*
// method-1 for handing promise
dbConnect().then( (resp) => {    // return  Promise { <pending> }
    // console.log(resp)
    // console.log(resp.find().toArray())  // return  Promise { <pending> }
    resp.find().toArray().then( (data) => {
        console.log(data);
    })
})

// method-2 for handing promise
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();

*/