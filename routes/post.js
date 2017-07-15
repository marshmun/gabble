const models = require('../models')


function allpost(app) {
    app.post('/homepage', function (req, res) {
        var post = req.body;
        var newPost = models.post.build
            ({
                authorId: req.session.requestingUser.id,
                body: req.body.body
            });
        newPost
            .save()
            .then(function (savedInput) {
                res.redirect('/homepage')
            }).catch(function (err) {
                res.status(500).send(err);
            })
    })

    app.post("/delete-post", (req, res) => {
        models.post.destroy({ where: { id: req.body.id } }).then(() => {
            return res.redirect('/homepage')
        }).catch(err => {
            res.send('error')
        })
    });
    app.post('/update'), (req, res) => {
        models.user.update()
    }


}
module.exports = allpost