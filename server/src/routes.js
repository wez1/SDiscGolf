const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TrackController = require('./controllers/TrackController')
module.exports = (app) => {
  app.get('/', function (req, res) {
    res.render('index', {
      message: 'something',
      title: 'something'
    })
  })
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.post('/savetrack',
    TrackController.createTrack)
  app.get('/gettrack',
    TrackController.getTrack)
}
