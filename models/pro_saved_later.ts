'use strict';
import {IsavedLater} from '../types'
import {Model} from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_saved_later extends Model<IsavedLater> implements IsavedLater {
    cod_saved_later!:number;
    cod_product!:number;
    cod_user!:number;
    createdAtSavedLater!: string;
    updatedAtSaveLater!: string;
    static associate(models:any) {
      // define association here
    }
  }
  pro_saved_later.init({
    cod_saved_later: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de persona",
    },
    cod_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    cod_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    createdAtSavedLater: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtSaveLater: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'pro_saved_later',
  });
  return pro_saved_later;
};