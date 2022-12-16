'use strict'

import {Model} from 'sequelize'
import {ILaberProduct} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_label extends Model<ILaberProduct> implements ILaberProduct {
    createdAtLabelProduct!: string;
    updatedAtLabelProduct!: string;
    cod_label_product!: number;
    name_label_product!:number;
    ins_label_product!:boolean;
    static associate (models:any) {
      // define association here
    }

  }
  pro_label.init({
    cod_label_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Código de fotografía',
    },
    name_label_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Código de producto',
    },
    ins_label_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'Url de la foto',
    },
    createdAtLabelProduct: {
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP "),
      type: DataTypes.DATE
    },
    updatedAtLabelProduct: {
      defaultValue: DataTypes.literal("NULL ON UPDATE CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    }
    
  }, {
    sequelize,
    modelName: 'pro_label'
  })
  return pro_label
}
