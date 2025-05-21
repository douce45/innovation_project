const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const  Versement = require ('./Versements')


const Historique_Versement = sequelize.define('historique_versement', {
    ID_HISTO_VERSEMENT: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    ID_VERSEMENT:{
    type: DataTypes.INTEGER,
    allowNull: false
    },
    MONTANT_ACTUEL: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    MONTANT_UPDATE: {
    type: DataTypes.INTEGER,
    allowNull: false
    }
    ,
    DATE_INSERTION: {
    type: DataTypes.DATE,
    allowNull: false
    },
    MOTIF
    : {
    type: DataTypes.STRING(100),
    allowNull: false
    }
   },
  {
    freezeTableName: true,
    tableName: 'historique_versement',
    timestamps: false
   })
   
   Historique_Versement.hasMany(Versement, { as: "versement", foreignKey: "ID_VERSEMENT" });
   module.exports = Historique_Versement
   