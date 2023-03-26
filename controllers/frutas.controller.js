const { request, response } = require("express");
const Fruta = require("../models/fruta.model");

const getFrutas = async (req = request, res = response) => {
  try {
    const frutas = await Fruta.find();

    res.status(200).json({
      msg: "Mensaje desde el metodo GET",
      frutas,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const getFrutaById = async (req = request, res = response) => {
    try {
      const frutas = await Fruta.findById(req.params.id)
  
      res.status(200).json({
        msg: "Mensaje desde el metodo getFrutaById",
        frutas,
      });
    } catch (err) {
      console.log(err);
      throw new Error("Error en el metodo GET");
    }
  };

module.exports = {
  getFrutas,
  getFrutaById
};
