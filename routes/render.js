const models = require('../models')

function render(app) {


    function checkAuth(req, res, next) {
        if (!req.session.requestingUser) {
            return res.redirect('/login');
        } else {
            next();
        }
    }
    app.get('/', function (req, res) {
        res.render('index');
    })

    app.get('/signup', function (req, res) {
        res.render('signup')
    })

    app.get('/login', function (req, res) {
        res.render('login')
    })

    app.get('/profile', checkAuth, function (req, res) {
        res.render('profile')
    })
    app.get('/myGabs', checkAuth, function (req, res) {
        res.render('personalGabs')
    })

    app.get('/homepage', checkAuth, function (req, res) {
        models.post.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: models.user,
                    as: "author"
                },
                {
                    model: models.like,
                    as: "like",
                }
            ],
        })
            .then(function (foundPosts) {
                res.render('homepage', {
                    all: foundPosts,
                    user: req.session.requestingUser
                })
            })
    })
}

module.exports = render;