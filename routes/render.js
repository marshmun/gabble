const models = require('../models')
function render(app) {

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

    app.get('/profile', function (req, res) {
        res.render('profile')
    })

    app.get('/homepage', function (req, res) {
        models.post.findAll().then(function (foundPosts) {
        })
        res.render('homepage', { post: foundPosts })
    })
}

module.exports = render;