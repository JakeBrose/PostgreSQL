module.exports = function(sequelize, DataTypes) {
  let Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, { tableName: "beaches", timestamps: false}
  );

  Beach.associate = (models) => {
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beach_id'
    })
      Beach.belongsToMany(models.Lifeguard, {
        through: {
          model: 'beach_guards',
          unique: false
        },
        foreignKey: 'BeachId',
        constraints: false
      });
  };
  return Beach;
};