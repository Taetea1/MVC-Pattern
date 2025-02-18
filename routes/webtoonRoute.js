const express = require("express");
const router = express.Router();

const webtoonController = require("../controllers/webtoonController");

router.get("/", webtoonController.getAllWebtoon);
router.get("/web/:id", webtoonController.getwbyid);
router.get("/man", webtoonController.getWebtoonMan);
router.get("/third", webtoonController.getWebtoonthird);
router.get("/genre", webtoonController.getWebtoonRomance);

module.exports = router;
