const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
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
    reviews: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
    },
    favorite: {
      type: DataTypes.BOOLEAN,
    }
   },{ timestamps: false });
};