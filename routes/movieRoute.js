const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/", movieController.getAllmovie);
router.get("/mov/:id", movieController.getmbyid);
router.get("/out", movieController.getmovieout);
router.get("/year", movieController.getmovieyear);
router.get("/genre", movieController.getmovieRomance);

module.exports = router;
