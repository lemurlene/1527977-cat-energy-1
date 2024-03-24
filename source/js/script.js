const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav__list');
const contactsMap = document.querySelector('.contacts__map-iframe');

contactsMap.classList.remove('contacts__map-iframe--no-js');
mainNav.classList.add('main-nav--closed');
navToggle.classList.add('main-nav__toggle--js');
mainNavList.classList.add('main-nav__list--js');

navToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--js');
})
