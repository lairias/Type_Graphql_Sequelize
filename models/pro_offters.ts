'use strict';
import {Model} from 'sequelize'
import {IOffters} from '../types'
module.exports = (sequelize:any, DataTypes:any) => {
  class pro_offters extends Model<IOffters> implements IOffters {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  pro_offters.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pro_offters',
  });
  return pro_offters;
};