DROP DATABASE IF EXISTS breddit_db;
CREATE DATABASE breddit_db;

USE breddit_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(30) NULL,
    password CHAR(60) BINARY,
    user_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    votes INT,
    body VARCHAR(500) NOT NULL,
    topic_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_by_user INT,
    PRIMARY KEY(id),
    FOREIGN KEY(created_by_user) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    body VARCHAR(100) NOT NULL,
    comment_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userName INT,
    topic_Id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(userName) REFERENCES users(id),
    FOREIGN KEY(topic_Id) REFERENCES topics(id)
);

CREATE TABLE replies (
    id INT NOT NULL AUTO_INCREMENT,
    body VARCHAR(100) NOT NULL,
    reply_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userName INT,
    comment_Id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(userName) REFERENCES users(id),
    FOREIGN KEY(comment_Id) REFERENCES comments(id)
);

