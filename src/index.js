require('dotenv').config();
const routes = require('./routes')
const express = require('express')
const db = require("./database/config");
const mongoose = require("mongoose");



const app = express()
mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json())
app.listen(3000)
app.use(routes);


