'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_saved_laters', {
      cod_saved_later: {
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
      cod_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Nombre del usuario",
        references: {
          model: {
            tableName: 'pe_users',
          },
          key: 'cod_user'
        },
      },
      createdAtSavedLater: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtSaveLater: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pro_saved_laters');
  }
};