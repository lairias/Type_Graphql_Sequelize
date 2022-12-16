'use strict'

import {Model} from 'sequelize'
import {IrecetlySenn} from '../types'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_recently_seen extends Model<IrecetlySenn> implements IrecetlySenn {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_recetlySenn! : number;
    cod_user!:number;
    cod_category!:number;
    cod_product!:number;
    createdAtRecetlySenn!: string;
    updatedAtRecetlySenn!: string;
    // static associate (models:any) {
    //   // define association here
    // }
  }
  pro_recently_seen.init({
    cod_recetlySenn: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Código de fotografía'
    },
    cod_user: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID4,
      comment: 'Código de producto'
    },
    cod_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Url de la foto'
    },
    cod_product: {
      type: DataTypes.JSONTYPE,
      allowNull: false,
      comment: 'Etiquetas de productos'
    },
    updatedAtRecetlySenn: {
      defaultValue: sequelize.literal(' NULL ON UPDATE CURRENT_TIMESTAMP'),
      type: DataTypes.DATE
    },
    createdAtRecetlySenn: {
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'pro_recently_seen'
  })
  return pro_recently_seen
}
