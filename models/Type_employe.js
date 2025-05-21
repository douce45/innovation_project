// models/Utilisateurs.js
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");

const Type_Versement = sequelize.define(
  "type_employe",
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
    tableName: "type_employe",
    timestamps: false,
  }
);
module.exports = Type_Versement;



