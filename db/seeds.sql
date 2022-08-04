USE breddit_db;

INSERT INTO user (id, email, username, password) VALUES (1, 'testuser@testuser.com', 'usernametest' ,'testuserpass1234');

INSERT INTO user (id, email, username, password) VALUES (2, 'testuser2@testuser2.com', 'testusername', 'testuserpass1234');

--Create test topic in the topics TABLE
INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (1, 'Test Topic', 0, 'This is a test topic', '2020-01-01 00:00:00', 1);

INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (2, 'Test Topic 2', 0, 'This is a test topic 2', '2020-01-01 00:00:00', 2);


--Create test comment in the comments TABLE
INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (1, 'This is a test comment', '2020-01-01 00:00:00', 1, 1);

INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (2, 'This is a test comment 2', '2020-01-01 00:00:00', 2, 2);


--Create test reply in the replies TABLE
INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (1, 'This is a test reply', '2020-01-01 00:00:00', 1, 1);

INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (2, 'This is a test reply 2', '2020-01-01 00:00:00', 2, 2);