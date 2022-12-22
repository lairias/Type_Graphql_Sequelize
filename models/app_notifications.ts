"use strict";
import {IappNotification} from "../types"
import {Model} from 'sequelize'
module.exports = (sequelize:any, DataTypes:any) => {
  class app_notifications extends Model<IappNotification> implements IappNotification {
    cod_notification!: number;
    view_notification!: number;
    label_notificaion!: string;
    updatedAtNotification!: string;
    createdAtNotification!: string;
    /**
     */
    static associate(models:any) {
      // define association here
    }
  }
  app_notifications.init(
    {
      cod_notification: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de notificación",
      },
      view_notification: {
        type: DataTypes.STRING(250),
        allowNull: false,
        comment: "visualizaciones de notificicación",
      },
      label_notificaion: {
        type: DataTypes.STRING(250),
        defaultValue: true,
        allowNull: false,
        comment: "Informacion de la notificación",
      },
      createdAtNotification: {
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        type: DataTypes.DATE,
        comment:"fecha de creación"
      },
      updatedAtNotification: {
        defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: DataTypes.DATE,
        comment:"fecha de modificación"
      }
    },
    {timestamps:false,
      sequelize,
      modelName: "app_notifications",
    }
  );
  return app_notifications;
};
