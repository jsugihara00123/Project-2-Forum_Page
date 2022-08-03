const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


//Topic model
class Topic extends Model {}
Topic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        body: { type: DataTypes.STRING,
            allowNull: false
        },
        topic_creation_date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        },
        created_by_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {   sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'topic'
    }
);

module.exports = Topic;