USE breddit_db;

--Create test user in the users TABLE
INSERT INTO users (id, user, password, user_creation_date) VALUES (1, 'testuser@testuser.com', 'testuserpass1234', '2020-01-01 00:00:00');

INSERT INTO users (id, user, password, user_creation_date) VALUES (2, 'testuser2@testuser2.com', 'testuserpass1234', '2020-01-01 00:00:00');

--Create test topic in the topics TABLE
INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (1, 'Test Topic', 0, 'This is a test topic', '2020-01-01 00:00:00', 1);

INSERT INTO topics (id, title, votes, body, topic_creation_date, created_by_user) VALUES (2, 'Test Topic 2', 0, 'This is a test topic 2', '2020-01-01 00:00:00', 2);


--Create test comment in the comments TABLE
INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (1, 'This is a test comment', '2020-01-01 00:00:00', 1, 1);

INSERT INTO comments (id, body, comment_creation_date, userName, topic_Id) VALUES (2, 'This is a test comment 2', '2020-01-01 00:00:00', 2, 2);


--Create test reply in the replies TABLE
INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (1, 'This is a test reply', '2020-01-01 00:00:00', 1, 1);

INSERT INTO replies (id, body, reply_creation_date, userName, comment_Id) VALUES (2, 'This is a test reply 2', '2020-01-01 00:00:00', 2, 2);