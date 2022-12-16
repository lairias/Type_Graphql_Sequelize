'use strict';
import {Model} from 'sequelize'
import {IshoppingCart} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class shopping_cart extends Model<IshoppingCart> implements IshoppingCart {
    cod_user!: number;
    cod_product!: number;
    createdAtShoppingCart!: string;
    updatedAtShippingCart!: string;

  }
  shopping_cart.init({
    cod_user: {
      type: DataTypes.INTEGER,
      comment: "Código de persona",
    },
    cod_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    createdAtShoppingCart: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtShippingCart: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};