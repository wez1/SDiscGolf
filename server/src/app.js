const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const app = express()
const config = require('./config/config')
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Succesfully started server on port: ${config.port}`)
  })
