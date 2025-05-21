//models/Profils.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Profils = sequelize.define('profil_users', {
 ID_PROFIL: {
 type: DataTypes.INTEGER,
 allowNull: false,
 primaryKey: true,
 autoIncrement: true
 },
 PROFIL_DESCR: {
 type: DataTypes.STRING(50),
 allowNull: false
 }   
}, {
 freezeTableName: true,
 tableName: 'profil_users',
 timestamps: false
})

module.exports = Profils
