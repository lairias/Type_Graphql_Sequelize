'use strict';
import {
  Model
} from 'sequelize';
import { IPhotoProduct } from "../types"
module.exports = (sequelize: any, DataTypes: any) => {
  class pro_photos extends Model<IPhotoProduct> implements IPhotoProduct {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_photo_product!: number;
    cod_product!: number;
    path_photo_product!: string;
    ins_photo_product!: boolean;
    createdAtPhotoProduct!: string;
    updatedAtPhotoProduct!: string;
    static associate(models: any) {
      models.pro_products.hasMany(pro_photos, {
        foreignKey: 'cod_user',
        onDelete: 'CASCADE',
      })
      // define association here
    }
  }
  pro_photos.init({
    cod_photo_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de fotografía",
    },
    cod_product: {
      type: DataTypes.INTEGER,
      comment: "Código de producto",
    },
    path_photo_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Url de la foto",
    },
    ins_photo_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "estado de la foto",
    },
    updatedAtPhotoProduct: {
      defaultValue: sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    createdAtPhotoProduct: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'pro_photos',
  });
  return pro_photos;
};