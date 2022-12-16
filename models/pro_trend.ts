'use strict'
import {Model} from 'sequelize'
import {ITrend} from "../types"
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_trend extends Model<ITrend> implements ITrend {
    cod_trend!:number
    cod_product!:number
    cod_category!:number
    createdAtTrend!: string
    updatedAtTredn!: string
    static associate (models:any) {
      // define association here
    }

  }
  pro_trend.init({
    cod_trend: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de persona",
    },
    cod_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    cod_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    createdAtTrend: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtTredn: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'pro_trend'
  })
  return pro_trend
}
