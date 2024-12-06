import createNavList from './createNavList';
function createBurgerMenu(burgerMenuButton ,paragraphs) {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuItems = createNavList(paragraphs)
  menuItems.querySelectorAll('.nav-link').forEach(item => {
    item.classList.remove('Action_Small');
    item.classList.add('Action_Large');
  });
  menu.append(menuItems)

  document.body.append(menu);

  // Логика для открытия/закрытия меню
  burgerMenuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Закрытие меню при клике на ссылку
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuButton.classList.remove('open');
      menu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
}

export default createBurgerMenu;