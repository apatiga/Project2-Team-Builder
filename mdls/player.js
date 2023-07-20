const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    high_school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jersey_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Player',
  }
);

module.exports = Player;
