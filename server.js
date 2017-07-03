const express = require("express");
const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const morgan = require('morgan')
const sessionKey = require('./sessionKey')
const app = express();
const port = process.env.PORT || 8000;

app.engine("mustache", mustacheExpress());
app.set('views', './public');
app.set("view engine", "mustache")

app.use('/', express.static('./public'))

app.listen(port, function () {
    console.log("Server is running on port", port);
})