const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('food', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
  
    },
    discount: {
      type: DataTypes.INTEGER,
  
    },
    review: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
    type: {
      type: DataTypes.STRING,
  
    },
    fat: {
      type: DataTypes.STRING,
  
    },
    sodium: {
      type: DataTypes.STRING,
  
    },
    sugar: {
      type: DataTypes.STRING,
  
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
   },{ timestamps: false });
};