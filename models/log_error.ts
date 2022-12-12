'use strict';
import { Model } from 'sequelize';
import {IError} from "../types"
module.exports = (sequelize:any , DataTypes:any ) => {
  class log_error extends Model<IError> implements IError {
    
      cod_error_log!:number;
      des_error!:string;
      type_error!:string;
      path_error!:string;
      updatedAtError!:string;
      createdAtError!:string;
  }
  log_error.init({
    
cod_error_log: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  comment: "Código de errro",
  type: DataTypes.INTEGER
},
des_error: {
  comment: "descripción del error",
  type: DataTypes.STRING
},
path_error: {
  comment: "ruta de error",
  type: DataTypes.STRING
},
type_error: {
  comment: "ruta de error",
  type: DataTypes.STRING
},
createdAtError: {
  allowNull: false,
  type: DataTypes.DATE
},
updatedAtError: {
  allowNull: false,
  type: DataTypes.DATE
}
  }, {
    sequelize,
    modelName: 'log_error',
  });
  return log_error;
};

