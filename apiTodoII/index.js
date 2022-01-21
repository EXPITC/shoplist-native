const express = require('express');
const app = express();
const port = 5000
const router = require('./src/routers')


const cors = require('cors')
// const http = require('http')
// const {Server} = require('socket.io')
// // const socketIo =  require('./src/socket')

// const server = http.createServer(app)
// const io = new Server(server, {
//   cors: {
//       origin: "http://localhost:3000"
//   }
// })

// require('./src/socket')(io)



app.use(express.json());
app.use(cors());
app.use('/todo/', router)
app.listen(port , ()=>{console.log(`listen port http://localhost:${port}`)})