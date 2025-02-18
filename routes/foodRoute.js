const express = require("express");
const router = express.Router();

const foodController = require("../controllers/foodController");

router.get("/", foodController.getAllfood);
router.get("/fod/:id", foodController.getfbyid);
router.get("/fast", foodController.getfastfood);
router.get("/price", foodController.getfoodprice);
router.get("/calo", foodController.getfoodcalo);

module.exports = router;
