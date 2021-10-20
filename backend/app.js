const express = require('express')
const cors = require('cors')

const Config = require('./config'),
   Router = require('./routes'),
   app = express()

app.use(cors())
app.use('/api/', Router)

app.listen(Config.server.port, function () {
   console.log('server is running at ' + Config.server.host + ":" + Config.server.port)
})
