const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('bill', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    numeroFactura: {
        type: DataTypes.INTEGER,
    },
    productos: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.INTEGER
    },
    descuento: {
        type: DataTypes.STRING
    },    
    estado: {
        type: DataTypes.STRING
    },   
    pagado: {
        type: DataTypes.BOOLEAN
    }
   },{ timestamps: false });
};