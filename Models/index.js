const User = require('./User');
const Draft = require('./Project');

User.hasMany(Draft, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Draft.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Draft};
