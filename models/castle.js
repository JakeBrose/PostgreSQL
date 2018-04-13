'use strict';

module.exports = function(sequelize, DataTypes) {
  let Castle = sequelize.define('Castle', {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    { tableName: "castles", timestamps: false}
  );

  Castle.associate = (models) => {
    Castle.belongsTo(models.Beach, {
      foreignKey: 'beach_id'
    });
    Castle.belongsTo(models.Tool, {
      foreignKey: 'tool_id'
    });
  };
  return Castle;
};