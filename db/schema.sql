DROP DATABASE IF EXISTS breddit_db;
CREATE DATABASE breddit_db;

USE breddit_db;

CREATE TABLE users (
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(30) NULL,
    password CHAR(60) BINARY,
    user_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE topics(
    topicId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    votes INT,
    body VARCHAR(500) NOT NULL,
    topic_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(30),
    FOREIGN KEY(created_by) REFERENCES users(userId)
);

CREATE TABLE comments (
    commentId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    body VARCHAR(100) NOT NULL,
    comment_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userName VARCHAR(30),
    topic_Id INT NOT NULL,
    FOREIGN KEY(userName) REFERENCES users(userId),
    FOREIGN KEY(topic_Id) REFERENCES topics(topicId)
);

CREATE TABLE replies (
    replyId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    body VARCHAR(100) NOT NULL,
    reply_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userName VARCHAR(30),
    comment_Id INT NOT NULL,
    FOREIGN KEY(userName) REFERENCES users(userId),
    FOREIGN KEY(comment_Id) REFERENCES comments(commentId)
);

