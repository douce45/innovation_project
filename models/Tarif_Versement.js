// models/Utilisateurs.js
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");

const Tarif_Versement = sequelize.define(
  "tarif_versement",
  {
    ID_TARIF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    TARIF_VERSEMENT: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    tableName: "tarif_versement",
    timestamps: false,
  }
);
module.exports = Tarif_Versement;



