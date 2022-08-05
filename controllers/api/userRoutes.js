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
    console.log('username' + req.body.username)
    try {
        const userData = await user.findOne({ where: { username: req.body.username } });
        if (userData) {
            const isPasswordValid = await userData.checkPassword(req.body.password);
            if (isPasswordValid) {
                console.log("passoword valid")
                // const token = userData.generateToken();
                // res.status(200).json({ token });

                req.session.save(() => {
                    req.session.user_id = userData.id;
                    req.session.logged_in = true;
                    res.json({ user: userData, message: 'You are now logged in!' });
                    console.log("logged in: " + req.session.logged_in)
                 })

                
             
            } else {
                res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            res.status(401).json({ error: 'Invalid username' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
    // try {
    //     // Find the user who matches the posted e-mail address
    //     const userData = await user.findOne({ where: { username: req.body.username } });
    
    //     if (!userData) {
    //         console.log("can't find user!")

    //       res
    //         .status(400)
    //         .json({ message: 'Incorrect email or password, please try again' });
    //       return;
    //     }
    
    //     // Verify the posted password with the password store in the database
    //     const validPassword = await userData.checkPassword(req.body.password);
        
    
    //     if (!validPassword) {
    //         console.log("invalide password! ")
    //       res
    //         .status(400)
    //         .json({ message: 'Incorrect email or password, please try again' });
    //       return;
    //     }
    
    //     // Create session variables based on the logged in user
    //     req.session.save(() => {
    //         console.log("userData.id: " + userData.id)

    //       req.session.user_id = userData.id;
    //       req.session.logged_in = true;
    //       console.log("req.session.user_id: " + req.session.user_id)
          
    //       res.json({ user: userData, message: 'You are now logged in!' });
    //     });
    
    //   } catch (err) {
    //     console.log("error 400", err )

    //     res.status(400).json(err);
    //   }
});


//Router API Endpoint /users/logout to logout a user and return the user object for logout and end the session for the user
router.post('/logout', async (req, res) => {
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
    // if (req.session.logged_in) {
    //     // Remove the session variables
    //     req.session.destroy(() => {
    //       res.status(204).end();
    //     });
    //   } else {
    //     res.status(404).end();
    //   }
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

