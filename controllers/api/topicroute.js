const router = express.Router();
const Topic = require('../../models/topic');
const User = require('../../models/user');

let post = require('../../models/post');
let comment = require('../../models/comment');
let user = require('../../models/user');

//Router gets called when the user goes to /api/topics and returns the 10 most recent posts
router.get('/topics', (req, res) => {
    post.findAll({ userData: {}, limit: 10, order: [['createdAt', 'DESC']] })
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.status(500).json(err);
        }
    );
});

//Router gets the topic and comments for the topic the user requested and returns the topic and comments
router.get('/topics/:id', (req, res) => {
    post.findAll({ where: { topicId: req.params.id }, include: [{ model: comment, include: [{ model: user }] }] })
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.status(500).json(err);
        }
    );
});


//Router put called when the user creates a new topic and the server accepts the topic and creates it
router.put('/new_topic', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const topicData = await Topic.create({
        title: req.body.title,
        description: req.body.description,
        created_by: userData.id,
        });
        res.json(topicData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

//Router updates the topic and the server accepts the topic and updates it
router.put('/update_topic', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const topicData = await Topic.update({
        title: req.body.title,
        description: req.body.description,
        created_by: userData.id,
        },
        { where: { id: req.body.id } });
        res.json(topicData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);