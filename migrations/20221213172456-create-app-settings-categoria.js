'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_settings_categoria', {
      cod_setting_categorie: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de notificación",
      },
      nam_setting_categorie: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "visualizaciones de notificicación",
      },
      sub_setting_categorie: {
        type: Sequelize.JSON,
        allowNull: false,
        comment: "Informacion de la notificación",
      },
      des_setting_categorie: {
        type: Sequelize.STRING(250),
        defaultValue: true,
        allowNull: false,
        comment: "Informacion de la notificación",
      },
      createdAtSetting: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
        comment:"fecha de creación"
      },
      updatedAtSetting: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
        comment:"fecha de modificación"
      }
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('app_settings_categoria');
  }
};