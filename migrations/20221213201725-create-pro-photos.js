'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_photos', {
      cod_photo_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de fotografía",
      },
      cod_product: {
        type: Sequelize.INTEGER,
        comment: "Código de producto",
        references:{
          model:{
            tableName:'pro_products'
          },
          key: 'cod_product'
        }
      },
      path_photo_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Url de la foto",
      },
      ins_photo_product: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: "estado de la foto",
      },
      updatedAtPhotoProduct: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      createdAtPhotoProduct: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      }

      
    },{timestamps:false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pro_photos');
  }
};