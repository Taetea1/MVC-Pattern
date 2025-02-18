const webtoonModel = require("../models/webtoonModel");

const getAllWebtoon = (req, res) => {
  const webtoons = webtoonModel.getAllWebtoons();
  res.render("webtoon/index", { webtoons });
};
const getwbyid = (req, res) => {
  const authora = webtoonModel.getwById(req.params.id);
  if (authora) {
    res.render("webtoon/show", { authora });
  } else {
    res.statusCode = 404;
    res.send("해당하는 작가가 없습니다.");
  }
};
const getWebtoonMan = (req, res) => {
  const webtoon = webtoonModel.getMan();
  console.log(webtoon);
  res.render("webtoon/man", { webtoon });
};
const getWebtoonthird = (req, res) => {
  const webtoon = webtoonModel.getAge();
  res.render("webtoon/third", { webtoon });
};
const getWebtoonRomance = (req, res) => {
  const webtoonss = webtoonModel.getRomance();
  res.render("webtoon/genre", { webtoonss });
};

module.exports = {
  getAllWebtoon,
  getwbyid,
  getWebtoonMan,
  getWebtoonthird,
  getWebtoonRomance,
};
