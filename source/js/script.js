const navToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.add('main-nav--closed');
navToggle.classList.add('main-nav__toggle--js');

navToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--js");
})
