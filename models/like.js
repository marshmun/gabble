'use strict';
module.exports = function (sequelize, DataTypes) {
  var like = sequelize.define('like', {
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
  like.associate = function (models) {
    like.belongsTo(models.post, { as: "post", foreignKey: "postid" });
    like.belongsTo(models.user, { as: "author", foreignKey: "authorId" });
  };
  return like;
};