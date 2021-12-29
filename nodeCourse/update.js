const dbConnect = require("./mongodb")

const update = async () => {
    const data = await dbConnect();
    const result = await data.updateOne(
    // const result = await data.update(    // for update many records
        {item: "oneplus node+"}, { $set: { item: "oneplus node+ updated", qty:177, status:'NA'} }
    )
    /*
    console.log(result);
    output:
    {
        acknowledged: true,
        modifiedCount: 0,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 0
    }
    */
    const update = result.acknowledged==true ? 'Success! record updated' : 'Error! record not update';
    console.log(update);

}
update();