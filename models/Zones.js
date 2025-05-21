const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Communes = require('./Communes');
const Zones = sequelize.define('pms_zones', {
    ZONE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    ZONE_NAME: {
    type: DataTypes.STRING(100),
    allowNull: false
    },    
    COMMUNE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false
    },    
    LATITUDE: {
    type: DataTypes.FLOAT,
    allowNull: false
    }  
    ,
    LONGITUDE: {
    type: DataTypes.FLOAT,
    allowNull: false
    } 
   },
  {
    freezeTableName: true,
    tableName: 'pms_zones',
    timestamps: false
   })
   Zones.belongsTo(Communes, { as: "commune", foreignKey: "COMMUNE_ID" });

   module.exports = Zones
   