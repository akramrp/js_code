module.exports = reqFilter = ((req, resp, next) => {
    // console.log('reqFilter'); // check for run
    if(!req.query.age)
        resp.send('Please provide age parameter in url like this: localhost:3001/profile?age=19');
    else if(req.query.age<18)
        resp.send("You can not access this page??<br>Erorr!! Age Restraction")
    else
        next();
})