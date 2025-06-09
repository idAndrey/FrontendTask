document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-burger');
  const nav = document.querySelector('.js-nav');
  const body = document.body;

  // Открытие/закрытие меню
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--mobile');
    burger.setAttribute('aria-expanded', burger.classList.contains('burger--active'));

    // Блокировка скролла при открытом меню
    body.classList.toggle('no-scroll');
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.js-nav') && !e.target.closest('.js-burger')) {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--mobile');
      burger.setAttribute('aria-expanded', 'false');
      body.classList.remove('no-scroll');
    }
  });

  // Закрытие меню при нажатии на Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--mobile');
      burger.setAttribute('aria-expanded', 'false');
      body.classList.remove('no-scroll');
    }
  });
});