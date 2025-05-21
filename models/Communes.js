const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Provinces = require("./Provinces");

const Communes = sequelize.define('communes', {
    COMMUNE_ID : {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    COMMUNE_NAME: {
    type: DataTypes.STRING(100),
    allowNull: false
    },    
    PROVINCE_ID : {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    
    COMMUNE_LATITUDE: {
    type: DataTypes.FLOAT,
    allowNull: false
    }  
    ,
    COMMUNE_LONGITUDE: {
    type: DataTypes.FLOAT,
    allowNull: false
    } 
   },
  {
    freezeTableName: true,
    tableName: 'communes',
    timestamps: false
   })
   Communes.belongsTo(Provinces, { as: "province", foreignKey: "PROVINCE_ID" });

   module.exports = Communes
   