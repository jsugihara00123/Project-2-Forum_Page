const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


  // router.get('/', (req, res) => {
  
  //   res.render('homepage');
  // });

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });
    // const userData = await User.findAll({where: { username: req.body.username }})
    
    // .then(users => console.log(users));

   // const userData = await user.findOne({ where: { username: req.body.username } });



    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }


});

router.get('/topicCreation', (req, res) => {

  res.render('topicCreation');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

module.exports = router;
