const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Zones = require("./Zones");


const Collines = sequelize.define('collines', {
    COLLINE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    COLLINE_NAME: {
    type: DataTypes.STRING(100),
    allowNull: false
    },    
    ZONE_ID: {
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
    tableName: 'collines',
    timestamps: false
   })
   Collines.belongsTo(Zones, { as: "zone", foreignKey: "ZONE_ID" });

   module.exports = Collines
   