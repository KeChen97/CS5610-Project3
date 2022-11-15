//Ke Chen
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const routers = require('./router/routers');
const authRouter = require('./router/authRouter');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');
// const { METHODS } = require('http');

app.use(
  session({
    secret: "cs webdev",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
})
);

app.use(express.static(__dirname));
app.use('/', routers);
app.use('/', authRouter);

//for parsing application/json
// it parses incoming requests with JSON payloads
app.use(express.json()); 
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true})); 



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
