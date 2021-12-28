const { MongoClient } = require('mongodb');
// import { MongoClient } from 'mongodb'

const URL = "mongodb://localhost:27017";
const DATABASE = "akramTestDB";
const COLLECTION = "collectionTest";

const client = new MongoClient(URL);

async function dbConnection() {
    let result = await client.connect();
    let db = result.db(DATABASE);
    return db.collection(COLLECTION);
}
module.exports = dbConnection;

/*
// method-1 for handing promise
dbConnection().then( (resp) => {    // return  Promise { <pending> }
    // console.log(resp)
    // console.log(resp.find().toArray())  // return  Promise { <pending> }
    resp.find().toArray().then( (data) => {
        console.log(data);
    })
})

// method-2 for handing promise
const main = async () => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}
main();

*/