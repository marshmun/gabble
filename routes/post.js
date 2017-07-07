const models = require('../models')


function allpost(app) {

    app.post('/signup', function (req, res) {
        var username = req.body;
        console.log('input: ', username);

        var newUser = models.user.build(username);
        console.log(username.username)
        console.log(models.user.find())

        newUser
            .save()
            .then(function (savedInput) {

                res.redirect('/login')
            }).catch(function (err) {
                res.status(500).send(err);
            })
    })

    app.post('/homepage', function (req, res) {
        var post = req.body;
        console.log('input: ', post);

        var newPost = models.post.build(post);
        newPost
            .save()
            .then(function (savedInput) {
                res.redirect('/homepage')
            }).catch(function (err) {
                res.status(500).send(err);
            })
    })

    app.post("/login", function (req, res) {
        if (!req.body || !req.body.username || !req.body.password) {
            return res.redirect('/')
        }
        var requestingUser = req.body;
        var userRecord;


        models.user.findAll().then(function (foundUsers) {
            foundUsers.forEach(function (item) {
                if (item.username === requestingUser.username) {
                    userRecord = item;
                    console.log(userRecord)
                }
            })
            if (!userRecord) {
                return res.redirect('/login');//user not found
            }

            if (requestingUser.password === userRecord.password) {
                req.session.requestingUser = userRecord;
                return res.redirect('/homepage')
            } else {
                return res.redirect('/login')
            }
        });
    })
}



module.exports = allpost;