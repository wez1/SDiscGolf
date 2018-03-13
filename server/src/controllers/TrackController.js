const {Track} = require('../models')
const {Hole} = require('../models')

module.exports = {
  async createTrack (req, res) {
    try {
      const track = await Track.create(req.body.track)
      const hole = await req.body.hole.forEach(function (data) {
        Hole.create(data)
      })
      res.send({
        track: track,
        hole: hole
      })
    } catch (err) {
      res.status(400).send({
        error: 'badshit'
      })
    }
  },
  updateTrack (req, res) {

  },
  async getTrack (req, res) {
    try {
      const response = await Track.findAll({
        include: [{
          model: Hole, as: 'Holes'
        }]
      })
      // const responseJson = response.toJSON()
      res.send({
        response: response
      })
    } catch (err) {
      res.status(400).send({
        error: 'badshit'
      })
    }
  },
  deleteTrack (req, res) {

  }
}
