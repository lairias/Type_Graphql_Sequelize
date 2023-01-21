'use strict';

import {Model} from "sequelize"
import {IProCategory} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_categoria extends Model<IProCategory> implements IProCategory {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_category!: number
    nam_category!:string
    des_category!:string
    cod_product!:number
    inv_category!:number
    photo_category!:string

  }
  pro_categoria.init({
    cod_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de categoria",
    },
    nam_category: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nombre de la categoria",
    },
    des_category: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Descripción de la categoria",
    },
    inv_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "cantidad de productos",
    },
    photo_categorytegory: {
      type: DataTypes.JSON,
      comment: "Catalago de fotografías",
    },
    createdAtCategory: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    updatedAtCategory: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'pro_categoria',
  });
  return pro_categoria;
};