const models = require('../models')


function allpost(app) {
    app.post('/homepage', function (req, res) {
        var post = req.body;
        console.log('input: ', post);

        var newPost = models.post.build({
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


}
module.exports = allpost