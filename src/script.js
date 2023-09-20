import "./sass/style.scss";
import html from "./index.html";

// TIMER
const startLogOutTimer = function () {
  const tick = function () {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

    const timerBox = document.querySelector(".timer__time");
    const timeString = `${hours}:${minutes}:${seconds}`;
    timerBox.textContent = timeString;

    if (time === 0) {
      clearInterval(timer);
    }
    time--;
  };

  let time = 4 * 3600 + 51 * 60 + 16; // 4 часа, 51 минута, 16 секунд

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

startLogOutTimer();

// PRICE

const priceValues = document.querySelectorAll(".price__value");

let currency = "R";

priceValues.forEach((value) => {
  value.textContent = `${currency} ${value.textContent}.00`;
});

// SLIDER
const slippers = new Swiper(".slippers", {
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});

const previewItems = document.querySelectorAll(".preview__item");

previewItems.forEach((previewImage, index) => {
  previewImage.addEventListener("click", () => {
    slippers.slideTo(index);
  });
});

slippers.on("slideChange", function () {
  previewItems.forEach((previewImage) => {
    previewImage.classList.remove("active");
  });
  const currentSlideIndex = slippers.realIndex;
  previewItems[currentSlideIndex].classList.add("active");
});

// RATING STARS
const ratingPercentage = 90;
const numActiveStars = Math.round((ratingPercentage / 100) * 5);
const stars = document.querySelectorAll(".rating__icon");

Array.from(stars)
  .slice(0, numActiveStars)
  .forEach((star) => {
    star.style.fill = "#F8B656";
  });

// SELECT

const selectList = document.querySelectorAll(".choice-group__select");
const selectContainerList = document.querySelectorAll(
  ".choice-group__select-container",
);

Array.from(selectList).forEach((select) =>
  select.addEventListener("click", function (event) {
    event.stopPropagation();
    select.parentElement.classList.toggle("active");
  }),
);

document.addEventListener("click", function () {
  Array.from(selectContainerList).forEach((selectContainer) => {
    if (!selectContainer.classList.contains("active")) return;
    console.log(123);
    selectContainer.classList.remove("active");
  });
});

// FORM
const form = document.querySelector(".order");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "https://www.youtube.com/";
});
