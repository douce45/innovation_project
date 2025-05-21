const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');


const Justification = sequelize.define('justification', {
    ID_JUSTIFICATION : {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    JUSTIFICATION: {
    type: DataTypes.STRING(200),
    allowNull: false
    }
    
   },
  {
    freezeTableName: true,
    tableName: 'justification',
    timestamps: false
   })
   module.exports = Justification
   