const webtoons = [
  {
    id: 1,
    title: "신의 탑",
    genre: "판타지",
    author: "SIU",
    gender: "남성",
    age: 37,
  },
  {
    id: 2,
    title: "노블레스",
    genre: "판타지",
    author: "손제호, 이광수",
    gender: "남성",
    age: 43,
  },
  {
    id: 3,
    title: "연애혁명",
    genre: "로맨스",
    author: "232",
    gender: "여성",
    age: 35,
  },
  {
    id: 4,
    title: "바른연애 길잡이",
    genre: "로맨스",
    author: "남수",
    gender: "남성",
    age: 32,
  },
  {
    id: 5,
    title: "마음의 소리",
    genre: "일상",
    author: "조석",
    gender: "남성",
    age: 41,
  },
  {
    id: 6,
    title: "세기말 풋사과 보습학원",
    genre: "로맨스",
    author: "순끼",
    gender: "여성",
    age: 29,
  },
  {
    id: 7,
    title: "마루는 강쥐",
    genre: "일상",
    author: "모죠",
    gender: "여성",
    age: 29,
  },
];

// 모든 정보
const getAllWebtoons = () => {
  return webtoons;
};

// 특정 id 조회
const getwById = (id) => {
  return webtoons.find((web) => web.id === parseInt(id));
};

// 남성 작가 리스트
const getMan = () => {
  let man = webtoons.filter((web) => web.gender === "남성");
  return man;
};

// 30살 이상인 작가
const getAge = () => {
  let third = webtoons.filter((web) => web.age >= 30);
  return third;
};

// 장르가 로맨스
const getRomance = () => {
  let genre = webtoons.filter((web) => web.genre === "로맨스");
  return genre;
};

module.exports = { getAllWebtoons, getwById, getMan, getAge, getRomance };
