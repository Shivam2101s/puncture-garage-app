const express = require('express');
const cors = require("cors");
const shopController = require("./controllers/shop.controller")

const app = express();

app.use(cors());
app.use(express.json());

app.use("",shopController);

module.exports = app;