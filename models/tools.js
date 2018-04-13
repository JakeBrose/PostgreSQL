'use strict';

module.exports = function(sequelize, DataTypes) {
  let Tool = sequelize.define('Tool', {
      name: DataTypes.STRING,
    },
    { tableName: "tools", timestamps: false}
  );

  Tool.associate = (models) => {
    Tool.hasMany(models.Castle, {
      foreignKey: 'tool_id'
    });
  };
  return Tool;
};