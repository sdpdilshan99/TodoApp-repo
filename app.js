const express = require("express");
const path = require('path');
const connectMongoDb = require('./todo-database');
const router = require("./todo-routes");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');


// enviroment variable
dotenv.config()


//init app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect database
connectMongoDb();


//view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true} ));
app.use("/", router)

// port
const port = process.env.PORT || 8000;

// server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;

