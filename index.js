// var express = require('express')
// var app = express()

// app.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes/routes");

// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);
app.use(initRoutes);
// let port = 8080;

// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });