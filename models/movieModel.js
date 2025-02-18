const movies = [
  {
    id: 1,
    title: "어벤져스: 엔드게임",
    genre: "액션",
    director: "앤서니 루소, 조 루소",
    releaseYear: 2019,
    from: "외국",
  },
  {
    id: 2,
    title: "기생충",
    genre: "드라마",
    director: "봉준호",
    releaseYear: 2019,
    from: "한국",
  },
  {
    id: 3,
    title: "인터스텔라",
    genre: "SF",
    director: "크리스토퍼 놀란",
    releaseYear: 2014,
    from: "외국",
  },
  {
    id: 4,
    title: "타이타닉",
    genre: "로맨스",
    director: "제임스 카메론",
    releaseYear: 1997,
    from: "외국",
  },
  {
    id: 5,
    title: "쥬라기 월드",
    genre: "모험",
    director: "콜린 트레보로우",
    releaseYear: 2015,
    from: "외국",
  },
];
// 모든 정보
const getAllMovies = () => {
  return movies;
};

// 특정 id 조회
const getmById = (id) => {
  return movies.find((mov) => mov.id === parseInt(id));
};

// 외국 영화 리스트
const getOut = () => {
  let from = movies.filter((mov) => mov.from === "외국");
  return from;
};

// 2000년대 이후
const getYear = () => {
  let year = movies.filter((mov) => mov.releaseYear > 2000);
  return year;
};

// 장르가 로맨스
const getRomance = () => {
  let genre = movies.filter((mov) => mov.genre === "로맨스");
  return genre;
};

module.exports = { getAllMovies, getmById, getOut, getYear, getRomance };
