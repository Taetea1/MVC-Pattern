const foodModel = require("../models/foodModel");

const getAllfood = (req, res) => {
  const foods = foodModel.getAllFood();
  res.render("food/index", { foods });
};
const getfbyid = (req, res) => {
  const foods = foodModel.getfById(req.params.id);
  if (foods) {
    res.render("food/show", { foods });
  } else {
    res.statusCode = 404;
    res.send("해당하는 음식이 없습니다.");
  }
};
const getfastfood = (req, res) => {
  const foods = foodModel.getfast();
  res.render("food/fast", { foods });
};
const getfoodprice = (req, res) => {
  const foods = foodModel.getPrice();
  res.render("food/price", { foods });
};
const getfoodcalo = (req, res) => {
  const foods = foodModel.getCalo();
  res.render("food/calo", { foods });
};

module.exports = {
  getAllfood,
  getfbyid,
  getfastfood,
  getfoodprice,
  getfoodcalo,
};
