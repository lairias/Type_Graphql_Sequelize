'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
        references: {
          model: {
            tableName: 'pro_categoria',
          },
          key: 'cod_category'
        },
      },
      hash_product: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4,
        comment: 'Código de barras del producto',
      },
      view_product:{
        type:Sequelize.JSON,
        comment:'conteo de visitas'
      },
      nam_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'nombre del producto',
      },
      price_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'precio del producto',
      },
      cod_label_product: {
        type: Sequelize.JSON,
        allowNull: false,
        comment: 'etiquetas del producto'
      },
      ins_product: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: 'estado del producto',
      },
      size_product: {
        type: Sequelize.JSON,
        defaultValue: '{S = 0, M = 0, L = 0, XL = 0, XXL = 0, XXXL = 0}',
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
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('pro_products');
  }
};