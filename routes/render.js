const models = require('../models')

function render(app) {


    function checkAuth(req, res, next) {
        if (!req.session.requestingUser) {
            return res.redirect('/login');
        } else {
            next();
        }
    }
    app.get('/', function(req, res) {
        console.log("session", req.session);
        res.render('index');
    })

    app.get('/signup', function(req, res) {
        res.render('signup')
    })

    app.get('/login', function(req, res) {
        res.render('login')
    })

    app.get('/profile', checkAuth, function(req, res) {
        res.render('profile')
    })

    app.get('/homepage', checkAuth, function(req, res) {
        models.post.findAll().then(function(foundPosts) {
            res.render('homepage', { post: foundPosts })
        })
    })
}

module.exports = render;