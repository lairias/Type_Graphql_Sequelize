'use strict';
import  {Model
} from 'sequelize'
import {IinterectComments} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class interact_comments extends Model<IinterectComments> implements IinterectComments {
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
      models.pe_users.hasMany(interact_comments, {
        foreignKey: 'cod_user',
        onDelete: 'CASCADE',
      })
      models.pro_products.hasMany(interact_comments, {
        foreignKey: 'cod_product',
        onDelete: 'CASCADE',
      })
      // define association here
    }
  }
  interact_comments.init({
    cod_comment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      comment: "Código de rol",
    },
    cod_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Código de producto'
    },
    cod_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Descripción de rol",
    },
    label_comment: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de rol",
    },
    createdAtInterectComments: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtInterectComments: {
      type: DataTypes.DATE
    }
  }, {timestamps:false,
    sequelize,
    modelName: 'interact_comments',
  });
  return interact_comments;
};