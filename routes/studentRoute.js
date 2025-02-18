const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getAllstu);
router.get("/stu/:id", studentController.getsbyid);
router.get("/astudent", studentController.getAstudent);
router.get("/older", studentController.getOlder);
router.get("/computer", studentController.getcom);

module.exports = router;
