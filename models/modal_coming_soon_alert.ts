'use strict';
import {Model} from 'sequelize'
import {ImodalComingSoonAlert} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class modal_coming_soon_alert extends Model<ImodalComingSoonAlert> implements ImodalComingSoonAlert  {
    ins_show_modal!: boolean;
    label_modal!: string;
    modal_information!: string;
    photoBackground!: string;
    start_time!: string;
    end_time!: string;
    updatedAtModalComingSoonAlert!: string;
    createdAtModalComingSoonAlert!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  modal_coming_soon_alert.init({
    ins_show_modal: {
      type: DataTypes.BOOLEAN,
      comment: 'Código de permiso',
    },
    label_modal: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de permiso",
    },
    modal_information: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de permiso",
    },
    photoBackground: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de permiso",
    },
    
    start_time: {
      allowNull: false,
      defaultValue: sequelize.DATE,
      type: DataTypes.DATE
    },
    end_time: {
      allowNull: false,
      defaultValue: sequelize.DATE,
      type: DataTypes.DATE
    },
    createdAtModalComingSoonAlert: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    updatedAtModalComingSoonAlert: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {timestamps:false,
    sequelize,
    modelName: 'modal_coming_soon_alert',
  });
  return modal_coming_soon_alert;
};