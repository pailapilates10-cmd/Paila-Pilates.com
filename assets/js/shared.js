'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
  menu.setAttribute('aria-label', opened ? 'Close menu' : 'Open menu');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navigation?.classList.contains('open')) {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
