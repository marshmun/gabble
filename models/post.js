'use strict';
module.exports = function (sequelize, DataTypes) {
  var post = sequelize.define('post', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: "users",
        key: "id",
      }
    },

  });
  post.associate = function (models) {
    post.hasMany(models.like, { as: "like", foreignKey: "postid" });
    post.belongsTo(models.user, { as: "author", foreignKey: "authorId" });
  };
  return post;
};