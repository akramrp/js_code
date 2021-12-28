const dbConnection = require("./mongodb");

const insert = async () => {
    const db = await dbConnection();
    const singleObj = { item: "oneplus node2", qty: 15, size: {h:10, w:15, uom:"cm"}, status:"D" }
    // const multipleObj = [
    //     { item: "max 1", qty: 25, size: {h:15, w:10, uom:"cm"}, status:"N" },
    //     { item: "max 2", qty: 25, size: {h:15, w:10, uom:"cm"}, status:"D" },
    //     { item: "max 3", qty: 25, size: {h:15, w:10, uom:"cm"}, status:"P" }
    // ];
    const result = await db.insertOne(singleObj);
    // console.log(result)
    //console.log(result.acknowledged)    // true
    //console.log(result.insertedId)      // new Obj+ectId("61c9d1c6213b4f01ef68044d")
    if(result.acknowledged)
        console.log('data inserted')
    else
        console.log('data not insert')
}
insert()