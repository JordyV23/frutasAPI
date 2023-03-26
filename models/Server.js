const express = require("express");
const cors = require("cors");
const conectorMONGO = require("../database/mongo");

class Server {
  constructor() {
    this.app = express();

    this.usersPath = "/frutas";

    //invocamos nuestros metodos
    this.middleWares();
    this.routes();
    this.MongoDB();
  }

  listen() {
    this.app.listen(2323, () => {
      console.log(`El servidor esta corriendo`);
    });
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.redirect("/frutas");
    });
    this.app.use(this.usersPath, require("../routes/frutas.route"));
  }

  middleWares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  MongoDB() {
    conectorMONGO();
  }
}

module.exports = Server;
