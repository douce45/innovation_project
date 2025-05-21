// models/Employes.js
const { DataTypes } = require("sequelize");
// const sequelize = require("../utils/sequilize");
const sequelize = require("../utils/sequelize");
const Profils = require("./Profils");
const Employes = sequelize.define(
  "employes",
  {
    ID_EMPLOYE : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NOM: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    PRENOM: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ID_PROFIL: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:null
    },
    EMAIL:{
        type:DataTypes.STRING(40),
        allowNull:false
    },
    TELEPHONE1: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    TELEPHONE2: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },    
    NUMERO_PERMIS: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }, 
    IS_ACTIVE: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    DATE_INSERTION:{
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue:DataTypes.NOW
    }
  },
  {
    freezeTableName: true,
    tableName: "employes",
    timestamps: false,
  }
);
Employes.belongsTo(Profils, { as: "profil", foreignKey: "ID_PROFIL" });
// Profils.hasMany(Employes, { as: "users", foreignKey: "ID_PROFIL" });
module.exports = Employes;



