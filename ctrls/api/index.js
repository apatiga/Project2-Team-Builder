const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./playerRoutes')

router.use('/users', userRoutes);
router.use('./project', projectRoutes);

module.exports = router;