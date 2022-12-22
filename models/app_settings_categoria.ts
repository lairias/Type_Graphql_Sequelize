'use strict';
import {Model} from 'sequelize'
import {IsettingCategorie} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class app_settings_categoria extends Model<IsettingCategorie> implements IsettingCategorie {
    cod_setting_categorie!: number;
    nam_setting_categorie!: string;
    sub_setting_categorie!:string
    des_setting_categorie!: string;
    createdAtSetting!: string;
    updatedAtSetting!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  app_settings_categoria.init({
    cod_setting_categorie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de notificación",
    },
    nam_setting_categorie: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "visualizaciones de notificicación",
    },
    sub_setting_categorie: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Informacion de la notificación",
    },
    des_setting_categorie: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Informacion de la notificación",
    },
    createdAtSetting: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE,
      comment:"fecha de creación"
    },
    updatedAtSetting: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE,
      comment:"fecha de modificación"
    }
  }, {
    sequelize,
    modelName: 'app_settings_categoria',
  });
  return app_settings_categoria;
};