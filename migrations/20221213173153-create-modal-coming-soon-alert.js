'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modal_coming_soon_alerts', {
      ins_show_modal: {
        type: Sequelize.BOOLEAN,
        comment: 'Código de permiso',
      },
      label_modal: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "Descripción de permiso",
      },
      modal_information: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true,
        comment: "Nombre de permiso",
      },
      photoBackground: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true,
        comment: "Nombre de permiso",
      },
      
      start_time: {
        allowNull: false,
        defaultValue: Sequelize.DATE,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        defaultValue: Sequelize.DATE,
        type: Sequelize.DATE
      },
      createdAtModalComingSoonAlert: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      updatedAtModalComingSoonAlert: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('modal_coming_soon_alerts');
  }
};