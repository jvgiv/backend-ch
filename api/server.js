const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()




server.use(helmet())
server.use(express.json())
// server.use(cors(
//     corsOptions
// ))

server.get('/', (req, res) => {
    res.send(`Server's Working!`)
})


module.exports = server;