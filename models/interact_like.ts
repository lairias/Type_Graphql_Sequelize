'use strict';
import { Model } from "sequelize";
import {IinteractLike} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class interact_like extends Model<IinteractLike> implements IinteractLike {
    cod_product!: number;
    cod_user!: number;
    createdAtInteractLike!: string;
    updatedAtInteractLike!: string;

  }
  interact_like.init({
    cod_product: {
      type: DataTypes.INTEGER,
      comment: "Código de persona",
    },
    cod_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
  
    createdAtInteractLike: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtInteractLike: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'interact_like',
  });
  return interact_like;
};