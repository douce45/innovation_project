// SELECT `ID_AFFECTATION_VOITURE`, `ID_VOITURE`, `ID_EMPLOYE`, `DATE_AFFECTATION` FROM `affectation_voiture` WHERE 1
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Voitures = require("./Voitures");
const Employes = require("./Employes");

const Affectation_Voiture = sequelize.define(
  "affectation_voiture",
  {
    ID_AFFECTATION_VOITURE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_VOITURE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_EMPLOYE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    ,
    DATE_AFFECTATION: {
      type: DataTypes.INTEGER,
      allowNull: false,
    } 
  },
  {
    freezeTableName: true,
    tableName: "affectation_voiture",
    timestamps: false,
  }
);
Voitures.belongsTo(Affectation_Voiture, { as: "voiture", foreignKey: "ID_VOITURE" });
Employes.belongsTo(Affectation_Voiture, { as: "employe", foreignKey: "ID_EMPLOYE" });


module.exports = Affectation_Voiture;



