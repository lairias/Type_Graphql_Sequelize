'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shopping_carts', {
      cod_user: {
        type: Sequelize.INTEGER,
        comment: "Código de persona",
        references: {
          model: {
            tableName: 'pe_users',
          },
          key: 'cod_user'
        },
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
      createdAtShoppingCart: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtShippingCart: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('shopping_carts');
  }
};