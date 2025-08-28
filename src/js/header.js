// Функция для управления мобильным меню
const setupMobileMenu = () => {
  // Находим все необходимые элементы в DOM
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('[data-menu-link]');
  const body = document.body;

  // Функция для открытия/закрытия меню
  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll'); // Блокируем/разблокируем скролл страницы
  };

  // Добавляем слушатели событий
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем меню при клике на одну из ссылок
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Проверяем, открыто ли меню перед тем как закрыть
      if (mobileMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });
};

// Вызываем нашу функцию
setupMobileMenu();