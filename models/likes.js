'use strict';
module.exports = function (sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    like: {
      type: DataTypes.INTEGER
    },
    postid: {
      type: DataTypes.INTEGER
    },
    authorid: {
      type: DataTypes.INTEGER
    },

  });
  likes.associate = function (models) {
    likes.belongsTo(models.post, { as: "post", foreignKey: "postid" });
    likes.belongsTo(models.user, { as: "author", foreignKey: "authorid" });
  };
  return likes;
};