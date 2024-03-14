const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require('path');

// const database = require('../../dbConnect');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);


app.post('/insertJsonData', controller.createItem);
app.get('/getJsonData', controller.getAllItems);
app.post('/updateJsonData', controller.updateItem);
app.post('/deleteJsonData', controller.deleteItem);
const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = router;