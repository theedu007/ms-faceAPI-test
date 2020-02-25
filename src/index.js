const express = require('express');
const app = express();
const path = require('path');
const homeController = require("./Controllers/Home/HomeController");

app.use(express.static(path.join(__dirname, "public")))
app.use("/", homeController);

app.listen(3000);