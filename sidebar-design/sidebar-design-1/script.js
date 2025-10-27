const sidebar = document.querySelector('aside');
const sidebarToggler = document.querySelector('header button');
console.log(sidebarToggler);

sidebarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
