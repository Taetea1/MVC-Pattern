const menu = [
  {
    id: 1,
    name: "김치찌개",
    category: "한식",
    price: 8000,
    calories: 350,
  },
  {
    id: 2,
    name: "스파게티",
    category: "이탈리안",
    price: 12000,
    calories: 600,
  },
  {
    id: 3,
    name: "초밥",
    category: "일식",
    price: 15000,
    calories: 250,
  },
  {
    id: 4,
    name: "햄버거",
    category: "패스트푸드",
    price: 7000,
    calories: 450,
  },
  {
    id: 5,
    name: "샐러드",
    category: "다이어트",
    price: 5000,
    calories: 200,
  },
];
// 모든 정보
const getAllFood = () => {
  return menu;
};

// 특정 id 조회
const getfById = (id) => {
  return menu.find((fod) => fod.id === parseInt(id));
};

// 패스트푸드 리스트
const getfast = () => {
  let food = menu.filter((fod) => fod.category === "패스트푸드");
  return food;
};

// 5000원 이상인 음식
const getPrice = () => {
  let price = menu.filter((fod) => fod.price >= 5000);
  return price;
};

// 칼로리가 600이상
const getCalo = () => {
  let calo = menu.filter((fod) => fod.calories >= 600);
  return calo;
};

module.exports = { getAllFood, getfById, getfast, getPrice, getCalo };
