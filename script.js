const slider = document.querySelectorAll(".swiper2-slide");

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,

  pagination: {
    el: ".swiper2",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <img
        class="non-active h-full rounded-2xl ${className}"
        src="images/image-product-${index + 1}-thumbnail.jpg"
      />`;
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperlight = new Swiper(".swiper3", {
  speed: 400,
  spaceBetween: 10,

  pagination: {
    el: ".swiper4",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <img
        class="non-active h-full rounded-2xl ${className}"
        src="images/image-product-${index + 1}-thumbnail.jpg"
      />`;
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

// Value
const value = document.getElementById("value");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

let newValue = 0;

plus.addEventListener("click", () => {
  newValue = newValue + 1;
  value.textContent = newValue;
});
minus.addEventListener("click", () => {
  if (newValue > 0) newValue = newValue - 1;
  value.textContent = newValue;
});

// Cart implementaion

const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
const addToCart = document.querySelector(".add-to-cart");
const quantity = document.querySelector(".quantity");
const filledCart = document.querySelector(".filledCart");
const emptyCart = document.querySelector(".empty-cart");

let previousTotal = 0;

cart.addEventListener("click", () => {
  cartContainer.classList.toggle("show");
});
addToCart.addEventListener("click", () => {
  cartContainer.classList.add("show");
  filledCart.classList.remove("hide");
  emptyCart.classList.add("hide");

  if (value.textContent > 1) {
    const totalValue = document.querySelector(".total-value");

    quantity.textContent = value.textContent;
    let newTotalValue = 125;
    newTotalValue = 125 * value.textContent;

    console.log(totalValue.textContent);
    totalValue.textContent = "$" + newTotalValue;
  }
});

//checkout cart prices
const clear = document.querySelector(".delete");

clear.addEventListener("click", () => {
  emptyCart.classList.toggle("hide");
  filledCart.classList.add("hide");
});

//Light Effect on img click

const slides = document.querySelectorAll(".slides");
const overlay = document.querySelector(".overlay");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    overlay.classList.toggle("light");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("light");
});
