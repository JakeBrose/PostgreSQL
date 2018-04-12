'use strict';

module.exports = function(sequelize, DataTypes) {
  let Lifeguard = sequelize.define('Lifeguard', {
    name: DataTypes.STRING,
  },
    { tableName: "lifeguards", timestamps: false}
    );

  Lifeguard.associate = (models) => {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beach_id'
    });
  };
  return Lifeguard;
};