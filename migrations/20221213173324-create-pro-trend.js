'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_trends', {
      cod_trend: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de persona",
      },
      cod_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Nombre del usuario",
        references: {
          model: {
            tableName: 'pro_products',
          },
          key: 'cod_product'
        },
      },
      cod_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Nombre del usuario",
        references: {
          model: {
            tableName: 'pro_categoria',
          },
          key: 'cod_category'
        },
      },
      createdAtTrend: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtTredn: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('pro_trends');
  }
};