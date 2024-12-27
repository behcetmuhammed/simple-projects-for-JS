//=Arabalar
var cars = [
  {
    name: "AudiX3",
    price: 24000,
    year: 2015,
    image: "./image/car-1.webp",
  },
  {
    name: "Mercedes",
    price: 34000,
    year: 2018,
    image: "./image/car-2.jpg",
  },
  {
    name: "BMW",
    price: 55000,
    year: 2022,
    image: "./image/car-3.jpg",
  },
  {
    name: "Togg",
    price: 28000,
    year: 2024,
    image: "./image/car-4.webp",
  },
  {
    name: "Ford",
    price: 22000,
    year: 2008,
    image: "./image/car-5.png",
  },
];

//= Kodlar
var index = 0;
var slaytCount = cars.length;

var settings = {
  duration: 3000, // Milisaniye cinsinden süre
  random: true, // Rastgele mi yoksa sırayla mı
};

//! Random sayı oluştur.
function getRandomImage() {
  let rand;
  do {
    rand = Math.floor(Math.random() * slaytCount);
  } while (rand === index); // Aynı slaytın tekrar seçilmesini engeller
  return rand;
}

//! Slaytları otomatik başlat.
function init(settings) {
  setInterval(function () {
    if (settings.random) {
      index = getRandomImage(); // Rastgele bir index seç
    }
    showSlide(index);
  }, settings.duration);
}

//! Slaytlarımın gösterilmesi
function showSlide(index) {
  document.querySelector(".card-img").setAttribute("src", cars[index].image);
  document.querySelector(".card-title").textContent = cars[index].name;
  document.querySelector(
    ".card-text"
  ).textContent = `Year: ${cars[index].year}`;
  document.querySelector(
    ".btn-primary"
  ).textContent = `Price: $${cars[index].price}`;
}

//! Manuel kontroller
//*sol ok
document
  .querySelector(".fa-circle-chevron-left")
  .addEventListener("click", function () {
    index--;
    if (index < 0) {
      index = slaytCount - 1; // Başa dön
    }
    showSlide(index);
  });
//*sağ ok
document
  .querySelector(".fa-circle-chevron-right")
  .addEventListener("click", function () {
    index++;
    if (index >= slaytCount) {
      index = 0; // Başa dön
    }
    showSlide(index);
  });

//! Slayt gösterisini başlat
showSlide(index);
init(settings);
