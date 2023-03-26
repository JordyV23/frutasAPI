const { Router } = require("express");
const { getFrutas, getFrutaById } = require("../controllers/frutas.controller");

const router = Router();

router.get("/", getFrutas);

router.get("/:id", getFrutaById);


module.exports = router;