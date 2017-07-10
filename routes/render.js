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

    app.get('/homepage', checkAuth, function (req, res) {
        models.post.findAll({
            include: [
                {
                    model: models.user,
                    as: "author"
                }
            ],
            // where: { authorId: req.body.postid }
        })
            .then(function (foundPosts) {
                var postsAuthorId = foundPosts[0].dataValues.authorId;
                var authorId = foundPosts[0].dataValues.author.dataValues.id;

                res.render('homepage', { post: foundPosts })
            })
    })
}

module.exports = render;