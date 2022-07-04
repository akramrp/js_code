// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://root:rootpass@crudd.6fvby.mongodb.net/CRUDD?retryWrites=true&w=majority'
mongoose.connect(DB_URL);