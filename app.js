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

// 앞에 이거는 생략해서 작성하겠다.(이거랑 연결(webtoonRouters=>컨트롤해서 연결되었는지 확인해보자))
app.use("/webtoons", webtoonRouters);
app.use("/movies", movieRouters);
app.use("/foods", foodRouters);
app.use("/elecs", elecRouters);
app.use("/students", stuRouters);

app.set("view engine", "ejs");
app.set("views", "./views");

// 모든 홈페이지에 무조건(기본)
app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});
