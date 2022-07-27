const express = require("express");
const sequelize = require("sequelize");
const mysql = require("mysql2");
const handlebars  = require("./views");
const routes = require("./routes");
const PORT = process.env.port||3001;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes)



















sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });