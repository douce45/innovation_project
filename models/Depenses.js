const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');


const Depense = sequelize.define('type_depense', {
    DEPENSE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    DESCRIPTION_DEPENSE: {
    type: DataTypes.STRING(200),
    allowNull: false
    }
    
   },
  {
    freezeTableName: true,
    tableName: 'type_depense',
    timestamps: false
   })
   module.exports = Depense
   