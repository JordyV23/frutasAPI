const express = require("express");
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
      console.log(
        `El servidor esta corriendo en el puerto http://localhost:2323/frutas`
      );
    });
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/frutas.route"));
  }

  middleWares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  MongoDB() {
    conectorMONGO();
  }
}

module.exports = Server;
