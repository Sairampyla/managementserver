

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const port = process.env.PORT || 8080;


const  { mongoose } = require('./db');

const keys = require('./config/keys');


const passport = require('passport');

var employeeController = require('./controllers/employeecontroller');

const passportSetup = require('./config/passport-setup');

var app = express();
// app.use(express.json({limit: '50mb'}));



// app.use(express.urlencoded(
//     {limit: '50mb', extended: true}
// ));

// set up session cookies
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey]
// }));

// enable cors
  // var corsOption = {
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  //   // exposedHeaders: ['x-auth-token']
  // };

// initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true }))


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use(cors());

app.listen(port, () => console.log(`server setup has started
server started at port:${port}`))


app.use('/api/storelogo', express.static(__dirname + '/public/uploads'));
app.use('/employees',employeeController);

