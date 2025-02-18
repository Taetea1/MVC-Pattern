const express = require("express");
const app = express();
const port = 3000;

const webtoonRouters = require("./routes/webtoonRoute");
const movieRouters = require("./routes/movieRoute");
const foodRouters = require("./routes/foodRoute");
const elecRouters = require("./routes/elecRoute");
const stuRouters = require("./routes/studentRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

app.use("/webtoons", webtoonRouters);
app.use("/movies", movieRouters);
app.use("/foods", foodRouters);
app.use("/elecs", elecRouters);
app.use("/students", stuRouters);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});
