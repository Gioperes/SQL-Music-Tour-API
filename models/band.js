// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Band extends Model{};

Band.init({
    band_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    genre:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    avalible_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
},{
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
})

// EXPORT
module.exports = Band
