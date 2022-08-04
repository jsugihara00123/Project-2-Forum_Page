const router = require('express').Router();
const user = require('../../models/user');


//Router API Endpoint /users/register to register a new user and return the user object for registration
router.post('/register', async (req, res) => {
    try {
        const userData = await user.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/login which takes in a username and password and uses bcrypt.compare to verify the password and returns a token if the user is found and the password is correct
router.post('/login', async (req, res) => {
    try {
        const userData = await user.findOne({ where: { username: req.body.username } });
        if (userData) {
           bcrypt.compare(userData.password, req.body.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    res.json({
                        id: userData.id,
                        username: userData.username,
                        token: token,
                    });
                } else {
                    res.status(401).json({ message: 'Invalid Credentials' });
                }
            }
        );

//Router API Endpoint /users/logout to logout a user and return the user object for logout and end the session for the user
router.get('/logout', async (req, res) => {
    try {
        const userData = await user.findOne({
            where: {
                id: req.session.user_id,
            },
        });
        req.session.destroy();
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to get a user and return the user object for the user
router.get('/:id', async (req, res) => {
    try {
        const userData = await user.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to update a user and return the user object for the user
router.put('/:id', async (req, res) => {
    try {
        const userData = await user.update({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        },
        { where: { id: req.params.id } });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Router API Endpoint /users/:id to delete a user and return the user object for the user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await user.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

