'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_recently_seens', {
      cod_recetlySenn: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Código de fotografía'
      },
      cod_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Código de producto',
        references: {
          model: {
            tableName: 'pe_users',
          },
          key: 'cod_user'
        },
      },
      cod_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Url de la foto',
        references: {
          model: {
            tableName: 'pro_categoria',
          },
          key: 'cod_category'
        },
      },
      cod_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Etiquetas de productos',
        references: {
          model: {
            tableName: 'pro_products',
          },
          key: 'cod_product'
        },
      },
      updatedAtRecetlySenn: {
        defaultValue: Sequelize.literal(' NULL ON UPDATE CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      createdAtRecetlySenn: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('pro_recently_seens');
  }
};