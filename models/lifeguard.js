'use strict';

module.exports = function(sequelize, DataTypes) {
  let Lifeguard = sequelize.define('Lifeguard', {
    name: DataTypes.STRING,
  },
    { tableName: "lifeguards", timestamps: false}
    );

  Lifeguard.associate = (models) => {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beachId'
    })
  // Lifeguard.belongsToMany(models.Beach, {
  //   through: {
  //     model:'beach_guards',
  //     unique: false
  //   },
  //   foreignKey: 'lifeguardId',
  //   constraints: false
  //   });
  };
  return Lifeguard;
};