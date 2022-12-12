'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_errors', {
      cod_error_log: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: "Código de errro",
        type: Sequelize.INTEGER
      },
      des_error: {
        comment: "descripción del error",
        type: Sequelize.STRING
      },
      path_error: {
        comment: "ruta de error",
        type: Sequelize.STRING
      },
      type_error:{
        allowNull:false,
        type:Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('log_errors');
  }
};