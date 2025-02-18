const movieModel = require("../models/movieModel");

const getAllmovie = (req, res) => {
  const movies = movieModel.getAllMovies();
  res.render("movie/index", { movies });
};
const getmbyid = (req, res) => {
  const movies = movieModel.getmById(req.params.id);
  if (movies) {
    res.render("movie/show", { movies });
  } else {
    res.statusCode = 404;
    res.send("해당하는 영화가 없습니다.");
  }
};
const getmovieout = (req, res) => {
  const movies = movieModel.getOut();
  console.log(movies);
  res.render("movie/out", { movies });
};
const getmovieyear = (req, res) => {
  const movies = movieModel.getYear();
  res.render("movie/year", { movies });
};
const getmovieRomance = (req, res) => {
  const movies = movieModel.getRomance();
  res.render("movie/genre", { movies });
};

module.exports = {
  getAllmovie,
  getmbyid,
  getmovieout,
  getmovieyear,
  getmovieRomance,
};
