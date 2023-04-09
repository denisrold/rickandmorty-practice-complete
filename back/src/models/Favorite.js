const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        AllowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown", "unknown"),
        AllowNull: false,
        defaultValue: "unknown",
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        AllowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
