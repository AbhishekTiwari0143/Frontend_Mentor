const menu = document.getElementById("menu");
const nav = document.getElementById("nav-links");
const navShow = document.querySelector(".navShow");

menu.addEventListener("click", () => {
  navShow.classList.toggle("hidden");
  console.log("removed hidden Class");
  nav.classList.toggle("show");
});
