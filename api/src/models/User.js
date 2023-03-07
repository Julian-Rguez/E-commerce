const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
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
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    },
    { timestamps: false }
  );
};
