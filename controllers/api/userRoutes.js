const router = require('express').Router();
const user = require('../../models/user');


//Router API Endpoint /users/register to register a new user and return the user object for registration
router.post('/register', async (req, res) => {
    try {
        const user = await user.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/login to login a user and return the user object for login and the session id for the user
router.post('/login', async (req, res) => {
    try {
        const user = await user.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            },
        });
        req.session.user_id = user.id;
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
        console.log(user);
    }
});

//Router API Endpoint /users/logout to logout a user and return the user object for logout and end the session for the user
router.get('/logout', async (req, res) => {
    try {
        const user = await user.findOne({
            where: {
                id: req.session.user_id,
            },
        });
        req.session.destroy();
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to get a user and return the user object for the user
router.get('/:id', async (req, res) => {
    try {
        const user = await user.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to update a user and return the user object for the user
router.put('/:id', async (req, res) => {
    try {
        const user = await user.update({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        },
        { where: { id: req.params.id } });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to delete a user and return the user object for the user
router.delete('/:id', async (req, res) => {
    try {
        const user = await user.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
