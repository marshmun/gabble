'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      like: {
        type: Sequelize.INTEGER
      },
      postid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          model: "posts",
          key: "id",
        }
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          model: "users",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('likes');
  }
};