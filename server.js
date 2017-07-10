const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const morgan = require('morgan')
const models = require('./models')
const sessionConfig = require("./session/sessionConfig")
const render = require('./routes/render')
const auth = require('./routes/auth')
const allpost = require('./routes/post')
const likes = require('./routes/likes')
const port = process.env.PORT || 8000;

//MUSTACHE-ENGINE
app.engine("mustache", mustacheExpress());
app.set('views', './views');
app.set("view engine", "mustache")

//MIDDLEWARE

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
//ROUTES
render(app)
allpost(app)
auth(app)

app.listen(port, function () {
    console.log("Server is running on port", port);
})