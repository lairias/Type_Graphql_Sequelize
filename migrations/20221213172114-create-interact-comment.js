'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interact_comments', 
      {
        cod_comment: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: "Código de rol",
        },
        cod_user: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "Descripción de rol",
          references: {
            model: {
              tableName: 'pe_users',
            },
            key: 'cod_user'
          },
        },
        cod_product: {
          type: Sequelize.INTEGER,
          defaultValue: true,
          allowNull: false,
          references: {
            model: {
              tableName: 'pro_products',
            },
            key: 'cod_product'
          },
          comment: "Indicador de estado de rol",
        },
        label_comment: {
          allowNull: false,
          type: Sequelize.STRING(120),
          unique: true,
          comment: "Nombre de rol",
        },
        createdAtInterectComments: {
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          type: Sequelize.DATE
        },
        updatedAtInterectComments: {
          defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
          type: Sequelize.DATE
        }},{timestamps:false});
  },
  async down(queryInterface,Sequelize ) {
    await queryInterface.dropTable('interact_comments');
  }
};