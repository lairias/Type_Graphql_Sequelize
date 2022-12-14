'use strict';
import {Model} from 'sequelize';
import {IProduct,size} from "../types"
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_products extends Model<IProduct> implements IProduct {
    /**
     */
     cod_product!:number;
    hash_product!:string;
    cod_category!:number;
    nam_product!:string;
    price_product!:number;
    ins_product!:boolean;
    size_product!:size;
    des_product!:string;
    discount_product!:number;
    stock_product!:boolean;
    createdAtProduct!:string;
    updatedAtProduct!:string;
    
    static associate(models:any) {
      models.pro_category.hasMany(pro_products, {
        foreignKey: 'cod_category',
        onDelete: 'CASCADE',
      })
      // define association here
    }
  }
  pro_products.init({
    cod_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de fotografía",
    },
    hash_product: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUID4,
      comment: "Código de producto",
    },
    cod_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Url de la foto",
    },
      nam_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    price_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    ins_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Url de la foto",
    },
    size_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    des_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    discount_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    stock_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
  }, {
    timestamps:false,
    sequelize,
    modelName: 'pro_products',
  });
  return pro_products;
};