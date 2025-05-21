const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Employes = require("./Employes");
const Amande = sequelize.define(
  "amande",
  {
    ID_AMANDE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MONTANT_AMANDE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_EMPLOYE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    ,
    DATE_AMANDE: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    tableName: "amande",
    timestamps: false,
  }
);
Employes.hasMany(Amande, { as: "employe", foreignKey: "ID_EMPLOYE" });

module.exports = Amande;



