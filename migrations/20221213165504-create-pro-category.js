'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_category', {
      cod_category: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de categoria",
      },
      nam_category: {
        type: Sequelize.STRING,
        allowNull: false,                                     
        comment: "Nombre de la categoria",
      },
      des_category: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Descripción de la categoria",
      },
      inv_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "cantidad de productos",
      },
      photo_categorytegory: {
        type: Sequelize.JSON,
        comment: "Catalago de fotografías",
      },
      createdAtCategory: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      updatedAtCategory: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('pro_category');
  }
};
