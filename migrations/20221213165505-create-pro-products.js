'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_products', {
      cod_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Código de fotografía',
      },
      cod_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Url de la foto',
        references:{
          model:{
            tableName:'pro_category'
          },
          key:'cod_category'
        }
      },
      hash_product: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4,
        comment: 'Código de producto',
      },
      nam_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Url de la foto',
      },
      price_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Url de la foto',
      },
      ins_product: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: 'Url de la foto',
      },
      size_product: {
        type: Sequelize.JSONTYPE,
        defaultValue: size,
        allowNull: false,
        comment: 'Url de la foto',
      },
      des_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Url de la foto',
      },
      discount_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Url de la foto',
      },
      stock_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Url de la foto',
      },
      updatedAtPhotoProduct: {
        defaultValue: Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      createdAtPhotoProduct: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      }
  },),{timestamps:false}},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pro_products');
  }
};