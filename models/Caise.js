
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Caisse = sequelize.define(
  "caisse",
  {
    ID_CAISSE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MONTANT_INITIAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MONTANT_RESTANT:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DATE_CAISSE:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    tableName: "caisse",
    timestamps: false,
  }
);
module.exports = Caisse;



