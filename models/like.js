'use strict';
module.exports = function (sequelize, DataTypes) {
  var likes = sequelize.define('like', {
    like: {
      type: DataTypes.INTEGER
    },
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: "posts",
        key: "id",
      }
    },
  });
  likes.associate = function (models) {
    likes.belongsTo(models.post, { as: "post", foreignKey: "postid" });
    likes.belongsTo(models.user, { as: "author", foreignKey: "authorID" });
  };
  return likes;
};