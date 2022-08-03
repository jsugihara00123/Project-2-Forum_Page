const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


//Topic model
class Topic extends Model {}
Topic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // TODO - Do we want to vaildate information from the body of a topic? If so we can add it in here unless validation takes place elsewhere.
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
            //foreignKey is from user.id in the database
            references: {
                model: 'users',
                key: 'id',
            },

        // TODO - Do we want to vaildate information from the body of a topic? If so we can add it in here unless validation takes place elsewhere.
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'topic',
    }
);

module.exports = Topic;