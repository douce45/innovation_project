//models/Profils.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Itineraire = require("./Itineraires");

const Voitures = sequelize.define('voiture', {

VOITURE_ID: {
 type: DataTypes.INTEGER,
 allowNull: false,
 primaryKey: true,
 autoIncrement: true
 },
 VOITURE_DESCR: {
 type: DataTypes.STRING(50),
 allowNull: false
 }
  ,
 PLAQUE: {
 type: DataTypes.STRING(50),
 allowNull: false
 } ,
 ID_ITINERAIRE: {
 type: DataTypes.INTEGER,
 allowNull: false
 } ,
 IS_ACTIVE: {
 type: DataTypes.TINYINT,
 allowNull: false
 } 
}, {
 freezeTableName: true,
 tableName: 'voiture',
 timestamps: false
})
Voitures.belongsTo(Itineraire, { as: "itineraire", foreignKey: "ID_ITINERAIRE" });
module.exports = Voitures
