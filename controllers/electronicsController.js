const elecModel = require("../models/electronicsModel");

const getAllelec = (req, res) => {
  const elecs = elecModel.getAllelec();
  res.render("electronic/index", { elecs });
};
const getebyid = (req, res) => {
  const elecs = elecModel.geteById(req.params.id);
  if (elecs) {
    res.render("electronic/show", { elecs });
  } else {
    res.statusCode = 404;
    res.send("해당하는 제품이 없습니다.");
  }
};
const getprice = (req, res) => {
  const elecs = elecModel.getPrice();
  res.render("electronic/price", { elecs });
};
const getsamsung = (req, res) => {
  const elecs = elecModel.getSamsung();
  res.render("electronic/samsung", { elecs });
};
const getelec = (req, res) => {
  const elecs = elecModel.getelec();
  res.render("electronic/elec", { elecs });
};

module.exports = {
  getAllelec,
  getebyid,
  getprice,
  getsamsung,
  getelec,
};
