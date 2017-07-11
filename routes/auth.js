const models = require('../models')



function auth(app) {

    app.post('/signup', function (req, res) {
        var username = req.body;
        var newUser = models.user.build(username);
        newUser
            .save()
            .then(function (savedInput) {

                res.redirect('/login')
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
                }
            })
            if (!userRecord) {
                return res.redirect('/login');
            }
            if (requestingUser.password === userRecord.password) {
                req.session.requestingUser = userRecord;
                return res.redirect('/homepage')
            } else {
                return res.redirect('/login')
            }
        });
    })

    app.get("/logout", function (req, res) {
        req.session.destroy();
        res.redirect("/");
    });
}


module.exports = auth;