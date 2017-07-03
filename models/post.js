'use strict';
module.exports = function (sequelize, DataTypes) {
  var post = sequelize.define('post', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return post;
};