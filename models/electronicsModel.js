const products = [
  {
    id: 1,
    name: "스마트폰",
    category: "전자기기",
    brand: "삼성",
    price: 1000000,
  },
  {
    id: 2,
    name: "노트북",
    category: "전자기기",
    brand: "애플",
    price: 2000000,
  },
  {
    id: 3,
    name: "디지털 카메라",
    category: "전자기기",
    brand: "캐논",
    price: 800000,
  },
  {
    id: 4,
    name: "헤드폰",
    category: "액세서리",
    brand: "소니",
    price: 150000,
  },
  {
    id: 5,
    name: "스마트 워치",
    category: "액세서리",
    brand: "삼성",
    price: 350000,
  },
];
// 모든 정보
const getAllelec = () => {
  return products;
};

// 특정 id 조회
const geteById = (id) => {
  return products.find((ele) => ele.id === parseInt(id));
};

// 전자기기 리스트
const getelec = () => {
  let elec = products.filter((ele) => ele.category === "전자기기");
  return elec;
};

// 80만원 이상인 제품
const getPrice = () => {
  let price = products.filter((ele) => ele.price >= 800000);
  return price;
};

// 삼성인 제품
const getSamsung = () => {
  let sam = products.filter((ele) => ele.brand === "삼성");
  return sam;
};

module.exports = { getAllelec, geteById, getelec, getPrice, getSamsung };
