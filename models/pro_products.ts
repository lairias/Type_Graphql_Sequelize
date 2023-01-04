import { Model } from 'sequelize'
import { IProduct } from '../types'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (sequelize: any, DataTypes: any) => {
  class pro_products extends Model<IProduct> implements IProduct {
    cod_product!: number
    cod_label_product!: string
    view_product!:string;
    hash_product!: string
    cod_category!: number
    nam_product!: string
    price_product!: number
    ins_product!: boolean
    size_product!: string
    des_product!: string
    discount_product!: number
    stock_product!: boolean
    createdAtProduct!: string
    updatedAtProduct!: string

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate (models: any) {
      models.pro_category.hasMany(pro_products, {
        foreignKey: 'cod_category',
        onDelete: 'CASCADE'
      })
      // define association here
    }
  }
  pro_products.init({
    cod_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Código de producto'
    },
    hash_product: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUID4,
      comment: 'Código de barras del producto'
    },
    cod_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Código de categoria'
    },
    view_product: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: 'conteo de vistas'
    },
    cod_label_product: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: 'etiquetas del producto'
    },
    nam_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nombre del producto'
    },
    price_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'precio del producto'
    },
    ins_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'estado del producto'
    },
    size_product: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: 'talla del producto'
    },
    des_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'descripcion del producto'
    },
    discount_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'descuento del producto'
    },
    stock_product: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'stroc del producto'
    },
    updatedAtProduct: {
      defaultValue: sequelize.literal(' NULL ON UPDATE CURRENT_TIMESTAMP'),
      type: DataTypes.DATE
    },
    createdAtProduct: {
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'pro_products'
  })
  return pro_products
}
