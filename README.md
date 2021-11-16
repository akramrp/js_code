# js_code

show dbs
use akramTestDB
db.collectionTest.insert({ "item": "oppo a83", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" });
db.collectionTest.find({ "item": "oppo a83"});
db.collectionTest.update({"qty":7}, {$set:{"item":"OPPO A83", "qty":77}});
db.collectionTest.updateOne({"item":"oppo A83"}, {$set:{"item":"OPPO A83", "qty":7}});
db.collectionTest.remove({"qty":100});  // delete where qty=100 only 1 record
db.collectionTest.remove({}); // remove all document

// cmd
>db.COLLECTION_NAME.find().limit(NUMBER)
>db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
>db.COLLECTION_NAME.find().sort({KEY:1})  //1=ascending order, -1=descending order.
>db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
>mongodump  //create backup

