DROP DATABASE IF EXISTS breddit_db;
CREATE DATABASE breddit_db;

USE breddit_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NULL,
    password CHAR(60) BINARY,
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

INSERT INTO users (id, email, password) VALUES (1, 'testuser@testuser.com', 'testuserpass1234');

INSERT INTO users (id, email, password) VALUES (2, 'testuser2@testuser2.com', 'testuserpass1234');

--Create test topic in the topics TABLE
INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (1, 'Test Topic', 0, 'This is a test topic', '2020-01-01 00:00:00', 1);

INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (2, 'Test Topic 2', 0, 'This is a test topic 2', '2020-01-01 00:00:00', 2);


--Create test comment in the comments TABLE
INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (1, 'This is a test comment', '2020-01-01 00:00:00', 1, 1);

INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (2, 'This is a test comment 2', '2020-01-01 00:00:00', 2, 2);


--Create test reply in the replies TABLE
INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (1, 'This is a test reply', '2020-01-01 00:00:00', 1, 1);

INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (2, 'This is a test reply 2', '2020-01-01 00:00:00', 2, 2);