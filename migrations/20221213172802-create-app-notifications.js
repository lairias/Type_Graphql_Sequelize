'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_notifications', {
      cod_notification: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de notificación",
      },
      view_notification: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "visualizaciones de notificicación",
      },
      label_notificaion: {
        type: Sequelize.STRING(250),
        defaultValue: true,
        allowNull: false,
        comment: "Informacion de la notificación",
      },
      createdAtNotification: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
        comment:"fecha de creación"
      },
      updatedAtNotification: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
        comment:"fecha de modificación"
      }
    },{timestamps:false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('app_notifications');
  }
};