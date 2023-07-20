const User = require('./User');
const Player = require('./player');

User.hasMany(Player, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Player.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Player};
