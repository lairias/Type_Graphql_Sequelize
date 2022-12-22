'use strict';
import  {Model
} from 'sequelize'
import {IinterectComments} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class interact_comment extends Model<IinterectComments> implements IinterectComments {
    cod_comment!:number
    cod_user!: number;
    cod_product!: number;
    label_comment!: string;
    updatedAtInterectComments!: string;
    createdAtInterectComments!: string;
    /*
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  interact_comment.init({
    cod_comment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de rol",
    },
    cod_user: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de rol",
    },
    cod_product: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Indicador de estado de rol",
    },
    label_comment: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de rol",
    },
    createdAtInterectComments: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    updatedAtInterectComments: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {timestamps:false,
    sequelize,
    modelName: 'interact_comment',
  });
  return interact_comment;
};