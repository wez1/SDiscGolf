module.exports = (sequelize, DataTypes) => {
  const Hole = sequelize.define('Hole', {
    par: {
      type: DataTypes.INTEGER
    },
    trackname: {
      type: DataTypes.STRING
    },
    pituus: {
      type: DataTypes.INTEGER
    }
  })

  Hole.associate = function (models) {
    models.Hole.belongsTo(models.Track, {
      onDelete: 'Cascade',
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Hole
}
