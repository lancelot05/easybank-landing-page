const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach((e) => {
      e.classList.remove('fade-in');
      e.classList.add('fade-out');
    });
  } else {
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach((e) => {
      e.classList.remove('fade-out');
      e.classList.add('fade-in');
    });
  }
});
