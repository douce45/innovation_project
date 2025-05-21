const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Tarif_Versement = require('./Tarif_Versement')


const Itineraire = sequelize.define('itineraire', {
    ID_ITINERAIRE: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    ITENAIRE_DESCR: {
    type: DataTypes.STRING(50),
    allowNull: false
    },
    ID_TARIF: {
    type: DataTypes.INTEGER,
    allowNull: false
    }    
   },
  {
    freezeTableName: true,
    tableName: 'itineraire',
    timestamps: false
   })
   Itineraire.belongsTo(Tarif_Versement, { as: "tarif", foreignKey: "ID_TARIF" });

   module.exports = Itineraire
   