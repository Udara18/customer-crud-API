const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./middleware/passportConfig');

const serverPort = process.env.SERVER_PORT;

//---------------------------------------------------------
const CustomerRoute = require('./routes/CusromerRoute');
const UserRoute = require('./routes/UserRoute');
//---------------------------------------------------------
const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//mongodb connection
mongoose.connect('mongodb://localhost:27017/TestApp');

app.listen(serverPort,()=>{
    console.log(`server is up and listen to port ${serverPort}`)
})

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">signup with google</a>')
})

app.get('/test',(req,res)=>{
    return res.json('server works');
});

app.use('/api/v1/customers',CustomerRoute);
app.use('/api/v1/users',UserRoute);
app.use('/auth',require('./routes/Auth'));