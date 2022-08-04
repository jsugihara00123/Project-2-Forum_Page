const router = require('express').Router();
const { Topic } = require('../models/topic');
const { User } = require('../models/user');
const { Comment } = require('../models/comment');

let post = require('../models/post');
let comment = require('../models/comment');
let user = require('../models/user');

//Router gets called when the user goes to /api/comments and returns the comments for the requested topic id.
router.post('/comments/:id', (req, res) => {
    comment.findAll({ where: { topicId: req.params.id }, include: [{ model: user }] })
        .then(comments => {
            res.json(comments);
        }).catch(err => {
            res.status(500).json(err);
        }
    );
});

//Router gets called when the user gets the comments for the requested topic id.
router.get('/comments', (req, res) => {
    comment.findAll({ include: [{ model: user }] })
        .then(comments => {
            res.json(comments);
        }).catch(err => {
            res.status(500).json(err);
        }
    );
});

//Router put called when the user creates a new comment on a topic and the server accepts the comment and attaches it to the topic.

router.put('/new_comment', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const commentData = await Comment.create({
            comment: req.body.comment,
            created_by: userData.id,
            topicId: req.body.topicId,
        });
        res.json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router updates the topic and the server accepts the comment and updates it.
router.put('/update_comment', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const commentData = await Comment.update({
            comment: req.body.comment,
            created_by: userData.id,
            topicId: req.body.topicId,
        },
            { where: { id: req.body.id } });
        res.json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});