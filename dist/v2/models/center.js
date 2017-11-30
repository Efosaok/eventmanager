'use strict';

module.exports = function (sequelize, DataTypes) {
  var Center = sequelize.define('centers', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    ownerid: DataTypes.INTEGER,
    facilities: DataTypes.STRING,
    amount: DataTypes.INTEGER
  });

  Center.associate = function (models) {
    Center.hasMany(models.events, {
      foreignKey: 'centerid',
      as: 'events'
    });
  };

  return Center;
};