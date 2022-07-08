// ::::::::::::::::::::::: from w3 school tutorial :::::::::::::::::::::::

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// var url = "mongodb://localhost:27017/mydb";

/*
//create data
MongoClient.connect(url, function(err, db){
  if(err) throw err;
  console.log('database connect successfully.');
  db.close();
});


// insert 1 record
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbObj = db.db("akramTestDB");
  var documentJson = {"item": "iphone 8", "qty": 17, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "S" };
  dbObj.collection("collectionTest").insertOne(documentJson, function(err, res){
    if (err) throw err;
    console.log('1 records insert', res);   //res return inserted id
    db.close();
  })
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbObj = db.db("akramTestDB");
  var documentJson = [
    {"item": "iphone 8 128gb", "qty": 17, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "D" },
    {"item": "iphone 11", "qty": 13, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "N" },
    {"item": "iphone 11 pro", "qty": 87, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "S" },
    {"item": "iphone 12", "qty": 67, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "D" }
  ];
  dbObj.collection("collectionTest").insertMany(documentJson, function(err, res){
    if (err) throw err;
    // res.insertedIds (return inserted ids), res.insertedCount (return count)
    console.log("Number of documents inserted: " + res.insertedCount); 
    db.close();
  })
});


// fatch one record
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbObj = db.db("akramTestDB");
  var documentJson = {"item": "iphone 8 128gb", "qty": 17};
  dbObj.collection("collectionTest").findOne({}, function(err, res){
    if (err) throw err;
    console.log(`Find Records \n name:${res.item}, qty:${res.qty}`); 
    db.close();
  })
});
*/

// fetch all recods
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbObj = db.db("akramTestDB");
  //var documentJson = {"item": "iphone 8 128gb", "qty": 17};
  dbObj.collection("collectionTest").find({}).toArray(function(err, res){
    if (err) throw err;
    res.forEach(element => { console.log(element); });
    db.close();
  })
});


// // find some recods
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbObj = db.db("akramTestDB");
//   //var documentJson = {"item": "iphone 8 128gb", "qty": 17};
//   dbObj.collection("collectionTest").find({}, { projection: { item:"iphone 8 128gb"}}).toArray(function(err, res){
//     if (err) throw err;
//     //res.forEach(element => { console.log(element); });
//     console.log(res)
//     db.close();
//   })
// });