'use strict';
module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      defaultValue: 'I have not updated my bio however I am pretty cool.'
    },
  }, {

    });
  user.associate = function (models) {
    user.hasMany(models.post, { as: "post", foreignKey: "authorId" });
    user.hasMany(models.like, { as: "like", foreignKey: "postid" });
  };
  return user;
};