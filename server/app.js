const express = require("express");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const routes = require("./routes.js");
const dotenv = require('dotenv').config();
const session = require('express-session');

let app = express();
exports.app = app;
var port = process.env.PORT || 1128;
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(morgan("common"));

app.use(session({
  secret: '499xcq3de300op',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: 60000 }
}));

app.use('/', routes);


app.listen(port, ()=>{
  console.log(`listening port: ${port}`);
})