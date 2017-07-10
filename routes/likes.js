const express = require("express");


function likes(app) {
    app.post("/like", function (req, res) {
        var newLike = models.like.build(req.body);
        newLike.save().then(function (savedLike) {
            res.redirect("/homepage");
        });
    });
    app.post("/likes", function (req, res) {
        models.like
            .findAll({
                include: [
                    {
                        model: models.user,
                        as: "author"
                    },
                    {
                        model: models.post,
                        as: "post"
                    }
                ],
                where: { postid: req.body.postid }
            })
            .then(function (foundLikes) {
                var other = foundLikes[0].post.body;

                res.render("likes", { likes: foundLikes, other: other });
            });
    });
}

module.exports = likes;