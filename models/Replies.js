const users = require('../models/user');
const topics = require('../models/topics');
const sequelize = require('../config/connection');
var DataTypes = require('sequelize/lib/data-types');

const repliesPage = sequelize.define('replies', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reply_creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn ('now'),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        //foreignKey is from user.id in the database
        references: {
            model: 'users',
            key: 'username',
        },
    comment_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    }, 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'replies',
    }
);

    module.exports = repliesPage;