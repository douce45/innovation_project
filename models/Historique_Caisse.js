const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");
const Employes = require("./Employes");

const Historique_caisse = sequelize.define(
  "historique_caisse",
  {
    ID_HISTO_CAISSE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MONTANT_ACTUEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MONTANT_RETIRE:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    ,
    DATE_HISTO_CAISSE:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    ,
    ID_EMPLOYE:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    ,
    ID_DEPENSE:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    tableName: "historique_caisse",
    timestamps: false,
  }
);
Employes.hasMany(Historique_caisse, { as: "verseEMPLOYEment", foreignKey: "ID_EMPLOYE" });
module.exports = Historique_caisse;



