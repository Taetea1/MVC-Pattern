const express = require("express");
const router = express.Router();

const elecController = require("../controllers/electronicsController");

router.get("/", elecController.getAllelec);
router.get("/elec/:id", elecController.getebyid);
router.get("/price", elecController.getprice);
router.get("/sam", elecController.getsamsung);
router.get("/ele", elecController.getelec);

module.exports = router;
