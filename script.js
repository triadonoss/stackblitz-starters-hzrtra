function showMenu(menuId) {
  // Hide all menus
  const menus = document.querySelectorAll('#app > div');
  menus.forEach(menu => menu.classList.add('hidden'));

  // Show the selected menu
  const menu = document.getElementById(menuId);
  if (menu) {
      menu.classList.remove('hidden');
  }
}
