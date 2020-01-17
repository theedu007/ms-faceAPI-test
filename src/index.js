const express = require('express');
const app = express();
const path = require('path');
const homeController = require("./Controllers/Home/HomeController");

app.use("/", homeController);

app.listen(3000);