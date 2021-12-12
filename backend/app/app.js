// const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').Server(app);

const port = process.env.PORT || 3000;

// to support JSON-encoded bodies
app.use(bodyParser.json())

// Require item routes
// const routes = require('./src/route/item.route')

// // using as middleware
// app.use('/item', routes)

// root path
app.get("/", (req, res, next) => {
    res.json("What's up?");
});

server.listen(port, () => {
    console.log('Listening on port: ' + port );
});