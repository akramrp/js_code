// video 18, 19, 20
const express = require('express');
const path = require('path');
const reqFilter = require('./middleware')

const app = express();
const PORT = 3001;
const viewsPath = path.join(__dirname, 'views')

// ======================== for ejs tempalte ========================
// video 22, 23, 24, 25, 26
app.set('view engine', 'ejs');


// app.use(reqFilter); // this is application middleware

app.get('/profile', reqFilter, (req, res) => { //this is only single page midleware
    const user = {
        name: 'Akram Saif',
        email: 'akramrp7@gmail.com',
        phone: 9987564310,
        city: 'Baheri',
        skills: ['Javascript',"React","MongoDB",'MySQL',"PHP"]
    }
    res.render('profile', {user});
});
// ======================== for ejs tempalte ========================


// app.use(express.static(viewsPath));
app.get('/', (req, res) => {
    // http://localhost:3001/?name=akram&mobile=9874563210
    // console.log(req.query);
    // console.log(req.query.name);
    // res.send('home page'); 
    res.sendFile(`${viewsPath}/home.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${viewsPath}/about.html`);
});

app.get('/help', (req, res) => {
    //res.send('help page');
    res.sendFile(`${viewsPath}/help.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${viewsPath}/404.html`);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));