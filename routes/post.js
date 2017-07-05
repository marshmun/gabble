const models = require('../models')


function allpost(app) {

    app.post('/signup', function (req, res) {
        var username = req.body;
        console.log('input: ', username);

        var newTodo = models.user.build(username);
        newTodo
            .save()
            .then(function (savedInput) {

                res.redirect('/login')
            }).catch(function (err) {
                res.status(500).send(err);
            })
    })

    app.post("/login", function (req, res) {
        if (!req.body || !req.body.username || !req.body.password) {
            console.log("missing data");
            return res.redirect('/')
        }

        var requestingUser = req.body;
        var userRecord;

        user.forEach(function (item) {
            console.log(item);
            if (item.username === requestingUser.username) {
                userRecord = item;
            }
        });
        if (!userRecord) {
            console.log("no user rec");
            return res.redirect('/login');//user not found
        }

        if (requestingUser.password === userRecord.password) {
            req.session.user = userRecord;
            return res.redirect('/profile')
        } else {
            console.log("wrong password");
            return res.redirect('/login')
        }
    })
}



module.exports = allpost;