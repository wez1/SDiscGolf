module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })
  Track.associate = function (models) {
    models.Track.hasMany(models.Hole)
  }
  return Track
}
