require('dotenv').config();
const routes = require('./routes')
const express = require('express')

const app = express()
app.listen(3000)
app.use(routes);


