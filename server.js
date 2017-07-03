const express = require("express");
const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const morgan = require('morgan')
const sessionConfig = require("./sessionConfig")
const sessionKey = require('./sessionKey')
const app = express();
const port = process.env.PORT || 8000;

//mustache engine running
app.engine("mustache", mustacheExpress());
app.set('views', './public');
app.set("view engine", "mustache")

//middleware

app.use('/', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session(sessionConfig));
function checkAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    } else {
        next();
    }
}

//routes
app.get('/', function (req, res) {
    console.log("session", req.session);
    res.render('index');
})

app.get('/signup', function (req, res) {
    res.render('signup')
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.get('/profile', checkAuth, function (req, res) {
    res.render('profile', { user: req.session.user });
})

app.get('/homepage', function (req, res) {
    res.render('homepage')
})



app.listen(port, function () {
    console.log("Server is running on port", port);
})