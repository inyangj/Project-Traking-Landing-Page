const menu = document.getElementById('menu');

const nav = document.getElementById('nav');

menu.addEventListener('toggle', openNav);

function openNav() {
nav.classList.toggle('show');
}