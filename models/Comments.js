//Build ow the comments model JS

const users = require('../models/user');
const topics = require('../models/topics');
// const posts = require('../models/posts');
const sequelize = require('../config/connection');
var DataTypes = require('sequelize/lib/data-types');

//Create the comments model using the topic.id and the posts.id fields and link the comments model to the posts.id field and then get the comments for each topic.
const commentsPage = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment_creation_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('now')},
    userName:{
        type: DataTypes.INTEGER
    },
    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //foreignKey is from topic.id in the database
        references: {
            model: 'topics',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
}
);

module.exports = commentsPage;
