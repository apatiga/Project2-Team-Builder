const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    req.session.save(() => {
      req.session.team = req.body.team.map(id => parseInt(id));
      res.status(200).json({'message': 'success'});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

