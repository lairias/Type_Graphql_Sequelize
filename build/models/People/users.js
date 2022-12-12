"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const people_1 = __importDefault(require("./people"));
const Usuario = config_1.default.define('pe_users', {
    cod_user: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de usuario",
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        comment: "Correo del usuario",
    },
    email_recovery: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        comment: "Correo del usuario",
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        comment: "Nombre de usuario unico",
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        comment: "Contraseña del usuario",
    },
    IND_INS: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
            notEmpty: true
        },
        comment: "Indicador de primer ingreso",
    },
    IND_USR: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        comment: "Estado del usuario",
    },
}, { timestamps: false,
});
Usuario.hasMany(people_1.default, { foreignKey: 'cod_user', sourceKey: 'cod_user' });
people_1.default.belongsTo(Usuario, { foreignKey: 'cod_user', targetKey: 'cod_user' });
exports.default = Usuario;
