// Фильтрация статей по тегам
function setupTagFilters() {
  const tags = document.querySelectorAll('.tag');
  const articleCards = document.querySelectorAll('.article-card');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Удаляем активный класс у всех тегов
      document.querySelector('.tag--active')?.classList.remove('tag--active');
      // Добавляем активный класс к выбранному тегу
      tag.classList.add('tag--active');

      const selectedTag = tag.textContent.trim();
      
      // Фильтрация карточек
      articleCards.forEach(card => {
        const cardTag = card.querySelector('.article-card__tag').textContent.trim();
        if (selectedTag === 'Все' || cardTag === selectedTag) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Бургер-меню
function setupBurgerMenu() {
  const burger = document.querySelector('.js-burger');
  const nav = document.querySelector('.js-nav');
  const body = document.body;

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--mobile');
    body.classList.toggle('no-scroll');
    burger.setAttribute(
      'aria-expanded',
      burger.classList.contains('burger--active')
    );
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.js-nav') && !e.target.closest('.js-burger')) {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--mobile');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Закрытие при нажатии Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--mobile');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Ленивая загрузка карточек (имитация)
function setupLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.articles__button');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    // В реальном проекте здесь будет AJAX-запрос
    console.log('Загружаем ещё статьи...');
    loadMoreBtn.textContent = 'Загрузка...';
    
    // Имитация загрузки
    setTimeout(() => {
      alert('Функционал "Показать ещё" в демо-версии ограничен');
      loadMoreBtn.textContent = 'Показать ещё';
    }, 1000);
  });
}

// Инициализация всех функций
document.addEventListener('DOMContentLoaded', () => {
  setupTagFilters();
  setupBurgerMenu();
  setupLoadMoreButton();
});