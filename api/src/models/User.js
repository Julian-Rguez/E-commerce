const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        minLength: 3,
        maxLength: 50,
    },
    telephone: {
      type: DataTypes.STRING,
      minLength: 9,
    },
    direction: {
      type: DataTypes.STRING,
      minLength: 9,
    }, 
    favorites: {
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    roll: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
      type: DataTypes.STRING,
      enum: ["valid", "invalid"],
      default: "valid",
    },
   },{ timestamps: false });
};