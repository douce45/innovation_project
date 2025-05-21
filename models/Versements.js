// models/Utilisateurs.js
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Employe = require("./Employes");

const Versement = sequelize.define(
  "versement",
  {
    ID_VERSEMENT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MONTANT: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_EMPLOYE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    VALIDE_PAR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:null
    },   
    DATE_INSERTION:{
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue:DataTypes.NOW
    }
  },
  {
    freezeTableName: true,
    tableName: "versement",
    timestamps: false,
  }
);
Employe.hasMany(Versement, { as: "employe", foreignKey: "ID_EMPLOYE" });
module.exports = Versement;



