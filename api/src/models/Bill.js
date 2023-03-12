const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('bill', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    billId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    products: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER
    },
    discount: { //en porcentaje
        type: DataTypes.INTEGER
    },    
    status: {
        type: DataTypes.STRING
    },   
    paid: {
        type: DataTypes.BOOLEAN
    }
   },{ timestamps: false });
};