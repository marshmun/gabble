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
  comment.associate = function (models) {
    comment.belongsTo(models.post, { as: "post", foreignKey: "postid" });
    comment.belongsTo(models.user, { as: "author", foreignKey: "authorid" });
  };
  return likes;
};