//Build ow the comments model JS

const comments = require('../models/comments');
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
        primaryKey: true,
        autoIncrement: true,
    },
    body: {
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
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //foreignKey is from post.id in the database
        references: {
            model: 'posts',
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
