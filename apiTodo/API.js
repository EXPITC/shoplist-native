const express = require('express');
const app = express();
const port = 5000
const router = require('./src/routers')


const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/todo/', router)
app.listen(port , ()=>{console.log(`listen port http://localhost:${port}`)})