import { DataTypes } from 'sequelize';
import db from '../../config';

const Usuario = db.define('pe_users', {
    cod_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de usuario",
      },
      firstName:{
       type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Nombre del usuario",
      },
      middleName:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Segundo nombre del usuario",
      },
      lastName: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Apellido del usuario",
      },
      email: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Correo del usuario",
      },
      email_recovery: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Correo del usuario",
      },
      userName:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Nombre de usuario unico",
      },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Contraseña del usuario",
      },
      photoProfile: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de perfil del usuario",
      },
      photoBackground: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de fondo del usuario",
      },
      IND_INS: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notEmpty: true
        },
        comment: "Indicador de primer ingreso",
      },
      IND_USR: {
        type:DataTypes.BOOLEAN,
        defaultValue: true,
  
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Estado del usuario",
      },
},{ timestamps: false } );


export default Usuario;