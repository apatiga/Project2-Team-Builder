const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./playerRoutes');
const teamRoutes = require('./teamRoutes');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('./project', projectRoutes);

module.exports = router;