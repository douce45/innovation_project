const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Carburant = sequelize.define(
  "carburant",
  {
    ID_CARBURANT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CARBURANT_DESCR: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }  
  },
  {
    freezeTableName: true,
    tableName: "carburant",
    timestamps: false,
  }
);
module.exports = Carburant;



