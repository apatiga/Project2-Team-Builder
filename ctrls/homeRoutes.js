const router = require('express').Router();
const { Player, User } = require('../mdls');
const withAuth = require('../util/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', {
      logged_in: req.session.logged_in,
      customCSS: '/css/homepage.css'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/players', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
    }

    // Get all projects and JOIN with user data
    const playerData = await Player.findAll();

    // Serialize data so the template can read it
    const players = playerData.map((player) => player.get({ plain: true }));

    // Unique schools we are working with.
    let schools = [];
    for (let i = 0; i < players.length; i++) {
      if (!schools.includes(players[i].high_school)) {
        schools.push(players[i].high_school);
      }
    }

    // Pass serialized data and session flag into template
    res.render('players', {
      schools,
      players,
      logged_in: req.session.logged_in,
      customCSS: '/css/homepage.css'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/team', async (req, res) => {
  const playerData = await Player.findAll();
  const players = playerData.map((player) => player.get({ plain: true }));
  const teamPlayers = players.filter((member) => req.session.team.includes(member.id));

  try {
    res.render('team', {
      players: teamPlayers,
      logged_in: req.session.logged_in,
      customCSS: '/css/homepage.css'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/player/:id', async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const player = playerData.get({ plain: true });

    res.render('player', {
      ...player,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('players', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/players');
    return;
  }

  res.render('login');
});

module.exports = router;
