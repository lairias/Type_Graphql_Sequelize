'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pro_labels', {
      cod_label_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Código de fotografía',
      },
      name_label_product: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Código de producto',
      },
      ins_label_product: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: 'Url de la foto',
      },
      createdAtLabelProduct: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP "),
        type: Sequelize.DATE
      },
      updatedAtLabelProduct: {
        defaultValue: Sequelize.literal("NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    }, {timestamps:false});
  },
  async down(queryInterface,Sequelize ) {
    await queryInterface.dropTable('pro_labels');
  }
};