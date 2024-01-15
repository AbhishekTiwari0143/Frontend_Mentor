const icon_down = document.querySelector(".company-img-down");
const icon_up = document.querySelector(".company-img-up");
const navLinks = document.querySelector(".nav-links");

const dropdown_image_change = (name) => {
  if (name === "company") {
    icon_down.classList.toggle("hide");
    icon_up.classList.toggle("hide");
    const dropdown = document.querySelector("#company-dropdown");
    dropdown.classList.toggle("hide");
  } else {
    const icon_down = document.querySelector(".feature-img-down");
    const icon_up = document.querySelector(".feature-img-up");
    icon_down.classList.toggle("hide");
    icon_up.classList.toggle("hide");
    const dropdown = document.querySelector("#feature-dropdown");
    dropdown.classList.toggle("hide");
  }
};

navLinks.addEventListener("click", (e) => {
  const id = e.target.id;
  if (id === "Company") {
    dropdown_image_change("company");
  }
  if (id === "feature") {
    dropdown_image_change("feature");
  }
});

const sideNav = document.querySelector(".side-nav");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");

menu.addEventListener("click", () => {
  console.log("sclicked");
  sideNav.classList.add("leftSide");
});
menuClose.addEventListener("click", () => {
  sideNav.classList.remove("leftSide");
});
