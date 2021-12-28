// video 18, 19, 20
const dbConnection = require("./mongodb");

// method-2 for handing promise
const main = async () => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}
main();