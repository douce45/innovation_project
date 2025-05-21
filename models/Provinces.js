const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Provinces = sequelize.define('provinces', {
    PROVINCE_ID : {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    PROVINCE_NAME: {
    type: DataTypes.STRING(100),
    allowNull: false
    },    
    PROVINCE_LATITUDE : {
    type: DataTypes.STRING(50),
    allowNull: false
    },
    
    PROVINCE_LATITUDE: {
    type: DataTypes.STRING(50),
    allowNull: false
    }  
    ,
    CIRCONSCRIPTION_ID : {
    type: DataTypes.INTEGER(10),
    allowNull: false
    } 
   },
  {
    freezeTableName: true,
    tableName: 'provinces',
    timestamps: false
   })
   module.exports = Provinces
   