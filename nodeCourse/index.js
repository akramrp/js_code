// video 18, 19, 20
const dbConnect = require("./mongodb");

// method-2 for handing promise
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();