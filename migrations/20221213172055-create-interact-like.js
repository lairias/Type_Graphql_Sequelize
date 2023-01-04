'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interact_likes', {
      cod_product: {
        type: Sequelize.INTEGER,
        comment: "Código de persona",
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
    
      createdAtInteractLike: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtInteractLike: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('interact_likes');
  }
};